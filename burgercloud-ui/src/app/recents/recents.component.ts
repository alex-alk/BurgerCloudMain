import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})

@Injectable()
export class RecentsComponent implements OnInit {
    
  recentBurgers: any;
    
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:8080/design/recent')
        .subscribe(data => this.recentBurgers = data['0']['id']);
  }

}
