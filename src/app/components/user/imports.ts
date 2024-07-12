// Import PrimeNG modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    FormsModule,
    DropdownModule
  ],
  exports: [
    DropdownModule,
    FormsModule
  ],
  providers: []
})
export class ImportsModule { }
