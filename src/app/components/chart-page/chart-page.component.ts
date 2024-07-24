import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import { loadChartData } from '../../store/chart.actions';
import { ChartState } from '../../store/chart.reducer';

@Component({
  selector: 'app-chart-page',
  standalone: true,
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit, AfterViewInit {
  chartData$: Observable<any[]>;
  isBrowser: boolean;

  constructor(
    private store: Store<{ chart: ChartState }>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.chartData$ = store.select(state => state.chart.data);
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.store.dispatch(loadChartData());
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.chartData$.subscribe(data => {
        this.renderChart(data);
      });
    }
  }

  renderChart(data: any[]) {
    Chart.register(...registerables);

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(item => item.title),
          datasets: [{
            label: 'Posts',
            data: data.map(item => item.id),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
