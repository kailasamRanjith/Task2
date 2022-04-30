import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterComponent } from '../componets/register/register.component';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage  implements OnInit {
  search_value;
  constructor(public db:DbService,public modalController:ModalController) {}

  ngOnInit() {}

  search(evt){
    this.search_value ='';
     if(evt.detail.value != '' && evt.detail.value != undefined){
       this.db.details = true;
       this.db.get_records(evt.detail.value).subscribe(r=>{
        console.log(r.data[0])  
        if(r.data && r.data[0]){
        this.search_value = r.data[0]
      }
      });
     }
     
  }

 
    async  insert(){
      const modal = await this.modalController.create({
        component: RegisterComponent,
        cssClass: 'register-pop'
      });
      return await modal.present();
    }
  
}
