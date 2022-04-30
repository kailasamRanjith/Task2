import { Component, Input, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})



export class PersonDetailsComponent implements OnInit {

  @Input() details;

  constructor(public db:DbService) { }

  ngOnInit() {
    
  }

close(){
   this.db.details = false;
}

}
