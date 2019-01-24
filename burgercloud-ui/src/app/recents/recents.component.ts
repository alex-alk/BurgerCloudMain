import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Burger } from './burger';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})

@Injectable()
export class RecentsComponent implements OnInit {
    
  recentBurgers: Burger[];
    
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getRecentBurgers().subscribe((data: Burger[]) => {
    this.recentBurgers = data;
      console.log(data);
    });
  }
  getRecentBurgers(): Observable<Burger[]> {
    return this.httpClient.get<Burger[]>('http://localhost:8080/api/burgers/recent').pipe(
        map((result:any)=>{ return result._embedded.recents; }));
  }

}
