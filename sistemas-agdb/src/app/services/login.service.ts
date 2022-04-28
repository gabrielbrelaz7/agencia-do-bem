import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class LoginService {
  
  constructor(
    private http:HttpClient    
    ) { 

    }

    authenticate(data: any) {
        return this.http.post('/authenticate', data);
     }

}
