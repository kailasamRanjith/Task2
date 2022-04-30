import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  details = false;
  insert = false;
  
 
  constructor(private http: HttpClient,public alertController:AlertController) {
   
   }

  insert_records(data1): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    };
    let datas = {
     'datas': data1
    };
    
    return this.http.post(' http://127.0.0.1:5000/insert_records' ,datas,{headers:httpOptions.headers})
  }
  

  get_records(data1): Observable<any> {
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    };
    let datas = {
     'datas': data1
    };
   
    return this.http.post(' http://127.0.0.1:5000/get_records' ,datas,{headers:httpOptions.headers})
  }


}
