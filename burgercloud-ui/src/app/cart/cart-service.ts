import { CartItem } from './cart-item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

import { Burger } from './burger';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  items: CartItem[] = [];
  ids = [];
  
  burger: Burger = {
    name: '',
    ingredients: [],
    link:''
  }
  burgers: Burger[] = [];
  ingrdata:any = [];
  burgerlink = '';
  
  constructor(private httpClient: HttpClient) {
    this.items = [];
  }
  public getR(link) {
        return this.httpClient.get(link);
  }
  
  getBurgers(){
    let links: [];
    links = JSON.parse(sessionStorage.getItem('burgers'));
    links.forEach(link=>{ 
        this.getR(link).subscribe((result: any)=>{
              const ingrlink = result._links.ingredients.href;
              this.getR(ingrlink).subscribe((ingdata: any) =>{
                            this.ingrdata = ingdata._embedded.ingredients;
                            this.items.push(new CartItem(new Burger(result.name, this.ingrdata, result._links.burger.href)));
                                            }
                                  );
        })
         
             
    });
  }

  addToCart() {
    
  }

  getItemsInCart() {
    return this.items;
    
  }

  getCartTotal() {
    let total = 0;
    this.items.forEach(item => {
      total += item.lineTotal;
    });
    return total;
  }

  emptyCart() {
    this.items = [];
  }

}
