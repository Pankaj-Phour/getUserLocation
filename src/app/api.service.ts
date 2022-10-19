import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  userLocation(endpoint:any,params:any) {
    return this.http.post(environment.url + endpoint, params)
  }
}
