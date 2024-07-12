// Import PrimeNG modules
import { NgModule } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';


@NgModule({
  imports: [
    SpeedDialModule,
    ToastModule
  ],
  exports: [
    SpeedDialModule,
    ToastModule
  ],
  providers: [
    MessageService
  ]
})
export class ImportsModule { }
