import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PersonDetailsModule } from '../componets/person-details/person-details.module';
import { RegisterModule } from '../componets/register/register.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PersonDetailsModule,
    RegisterModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
