import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }
  
  get(path: String): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/' + path).pipe(
        map((result:any)=>{
           return result._embedded.ingredients;
        }));
  }
}
  
