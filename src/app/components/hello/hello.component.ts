import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [SpeedDialModule, ToastModule],
  providers: [MessageService],
  styles: [
    `:host ::ng-deep {
        .speeddial-circle-demo {
            .p-speeddial-quarter-circle {
                &.p-speeddial-direction-up-left {
                    right: 0;
                    bottom: 0;
                }
    
                &.p-speeddial-direction-up-right {
                    left: 0;
                    bottom: 0;
                }
    
                &.p-speeddial-direction-down-left {
                    right: 0;
                    top: 0;
                }
    
                &.p-speeddial-direction-down-right {
                    left: 0;
                    top: 0;
                }
            }
        }
    }`
  ],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  items: MenuItem[] = [
    {
      icon: 'pi pi-pencil',
      command: () => {
        this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
      }
    },
    {
      icon: 'pi pi-refresh',
      command: () => {
        this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
      }
    },
    {
      icon: 'pi pi-trash',
      command: () => {
        this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
      }
    },
    {
      icon: 'pi pi-upload',
      routerLink: ['/fileupload']
    },
    {
      icon: 'pi pi-external-link',
      target: '_blank',
      url: 'http://angular.io'
    }
  ];

  constructor(private messageService: MessageService) { }
  ngOnInit() { }
}
