import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Burger } from './burger';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart-service';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})

@Injectable()
export class RecentsComponent implements OnInit {
  
  recentBurgers : Burger[]= [];
  burger: Burger = {
    name:'',
    ingredients : [],
    link: ''
  }
    
  constructor(private httpClient: HttpClient, private cart: CartService, private router: Router) { }

  ngOnInit() {
    
      this.recentBurgers = this.getRecentBurgers();
    
  }
  
  getRecentBurgers(){
    this.httpClient.get<Burger[]>('http://localhost:8080/api/burgers?size=12&sort=createdAt,desc').subscribe((result:any)=>{ 
        let burgers = result._embedded.burgers;
        for(let burger of burgers){
          this.burger.name = burger.name;
          const ingrlink = burger._links.ingredients.href;
          this.getR<any>(ingrlink).subscribe(ingdata =>{
               this.burger.ingredients = ingdata._embedded.ingredients;
               this.recentBurgers.push(new Burger(burger.name, this.burger.ingredients, burger._links.self.href));
          });
          
        }
     });
        
      return this.recentBurgers;
  }
  
  public getR<T>(link) {
        return this.httpClient.get<T>(link);
  }
  
  orderThis(link: string) {
    if(!sessionStorage.getItem('user')){
      this.router.navigate(['/login']);
    }
    let burgersInCart = [];
    if(sessionStorage.getItem('burgers')){
      burgersInCart=JSON.parse(sessionStorage.getItem('burgers'));
    }
    let twin = false;
    for(let burger of burgersInCart){
      if (burger == link)twin = true;
    }
    if(!twin)burgersInCart.push(link);
    sessionStorage.setItem('burgers',JSON.stringify(burgersInCart));
    console.log("order");
    console.log(burgersInCart);
    this.router.navigate(['/cos']);
  }
}
