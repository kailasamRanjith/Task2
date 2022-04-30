import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsComponent } from './person-details.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PersonDetailsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[PersonDetailsComponent]
})
export class PersonDetailsModule { }
