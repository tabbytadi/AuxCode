import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { KnobModule } from 'primeng/knob';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { NodeService } from '../service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { DataDisplayComponent } from './data-display/data-display.component';


interface City {
  name: string;
  code: string;
}

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataDisplayComponent, RouterOutlet, ButtonModule, MenubarModule, ReactiveFormsModule, DropdownModule, FormsModule, CheckboxModule, InputNumberModule, KnobModule, RatingModule, SliderModule, InputTextModule, ToggleButtonModule, CommonModule, ToastModule, SpeedDialModule, OrganizationChartModule, TreeTableModule, AccordionModule, CardModule, DividerModule, AvatarModule, FieldsetModule, ScrollPanelModule, TabViewModule, ToolbarModule],
  providers: [MessageService, NodeService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  selectedCity: City | undefined;

  countries: { name: string, code: string }[] = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];

  selectedCountry: { name: string, code: string } | undefined;

  data: TreeNode[] = [
    {
      label: 'Spain',
      expanded: true,
      children: [
        {
          label: 'Spain',
          expanded: true,
          children: [
            {
              label: 'Spain'
            },
            {
              label: 'Switzerland'
            }
          ]
        },
        {
          label: 'England',
          expanded: true,
          children: [
            {
              label: 'Ukraine'
            },
            {
              label: 'England'
            }
          ]
        }
      ]
    }
  ];

  circleDial: MenuItem[] = [
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
  files: any;
  cols: { field: string; header: string; }[] | undefined;

  constructor(private messageService: MessageService, private nodeService: NodeService) { }

  pizza: string[] = [];

  value1: number = 42723;

  value2: number = 58151;

  value3: number = 2351.35;

  value4: number = 50;

  value5: number = 20;

  value6: number = 50;

  value7: number = 10;

  value8: number = 20;

  percentValue: number = 55;

  ratingValue!: number;

  sliderValue: number = 50;

  items: MenuItem[] | undefined;

  activeIndex: number = 0;

  formGroup = new FormGroup({
    checked: new FormControl<boolean>(false)
  });

  ngOnInit() {
    this.nodeService.getFilesystem().then((files: any) => (this.files = files));
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
      { field: '', header: '' }
    ];

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ];
  }
}