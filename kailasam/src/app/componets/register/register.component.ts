import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  submitted = false;
  insert_form:FormGroup;
  today;
  constructor(public modalController:ModalController,public formBuilder:FormBuilder,public db: DbService) { }

  ngOnInit() {
    this.today = new Date();
    this.insert_form  = this.formBuilder.group({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      dob:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
    })
  }

  get name() { 
    return this.insert_form.get('name'); 
  }

  get email() { 
    return this.insert_form.get('email'); 
  }
  get phone() { 
    return this.insert_form.get('phone'); 
  }
  get dob() { 
    return this.insert_form.get('dob'); 
  }
  get address() { 
    return this.insert_form.get('address'); 
  }
  close(){
    this.modalController.dismiss();
  }

  submit(){
    this.submitted = true;
    if(this.insert_form.valid){
      console.log(this.insert_form);
      
      this.db.insert_records(this.insert_form.value).subscribe(r=>{
        if(r.data){
          this.modalController.dismiss();
        }
       
      });
    }

  }
}
