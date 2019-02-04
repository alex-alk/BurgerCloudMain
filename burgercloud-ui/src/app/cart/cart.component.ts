import { Component, OnInit, Injectable } from '@angular/core';
import { CartService } from './cart-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['./cart.component.css']
})

@Injectable()
export class CartComponent implements OnInit {

  model = {
    user: '',
    deliveryName: '',
    deliveryStreet: '',
    deliveryState: '',
    deliveryZip: '',
    ccNumber: '',
    ccExpiration: '',
    ccCVV: '',
    burgers: []
  };
  user: any ;
  link: string;

  constructor(private router: Router, private cart: CartService, private httpClient: HttpClient) {
    
  }

  ngOnInit() {
    if(!sessionStorage.getItem('user')){
      this.router.navigate(['/login']);
    }
    this.cart.getBurgers();
   
  }

  get cartItems() {
    return this.cart.getItemsInCart();
  }

  get cartTotal() {
    return this.cart.getCartTotal();
  }

  onSubmit() {
      JSON.parse(sessionStorage.getItem('burgers')).forEach(burger => {
        this.model.burgers.push(burger);
        let userl= JSON.parse(sessionStorage.getItem('user'));
        let link =  userl._links.self.href;
        this.model.user = link;
      });
      console.log(this.model);
      this.httpClient.post(
        'http://localhost:8080/api/orders',
        this.model, {
            headers: new HttpHeaders().set('Content-type', 'application/json'),
        }).subscribe(burger => console.log('-------added to db--------'));
   // this.httpClient.post(
   //     'http://localhost:8080/orders',
   //     this.model, {
   //         headers: new HttpHeaders().set('Content-type', 'application/json')
   //                 .set('Accept', 'application/json'),
   //     }).subscribe(r => this.cart.emptyCart());

    // TODO: Do something after this...navigate to a thank you page or something
  }

}
