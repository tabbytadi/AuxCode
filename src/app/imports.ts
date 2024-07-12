// Import PrimeNG modules
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { KnobModule } from 'primeng/knob';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    RouterOutlet,
    ButtonModule,
    MenubarModule,
    ReactiveFormsModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    InputNumberModule,
    KnobModule,
    RatingModule,
    SliderModule,
    InputTextModule,
    ToggleButtonModule
  ],
  exports: [
    RouterOutlet,
    ButtonModule,
    MenubarModule,
    ReactiveFormsModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    InputNumberModule,
    KnobModule,
    RatingModule,
    SliderModule,
    InputTextModule,
    ToggleButtonModule
  ],
  providers: []
})
export class ImportsModule { }
