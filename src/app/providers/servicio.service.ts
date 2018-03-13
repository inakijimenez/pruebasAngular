import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT = 'http://192.168.0.42:3000/todos/';

@Injectable()
export class ServicioService {

  
  constructor( private http: HttpClient) {
    console.log('ServicioService constructor');
   }

   getTarea (id): Observable<any> {
     let url = END_POINT + id;
     
     return this.http.get(url);
   }
}
