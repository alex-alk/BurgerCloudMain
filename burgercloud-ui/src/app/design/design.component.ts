import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Ingredient } from './ingredient';
import { Router } from '@angular/router/';
import { CartService } from '../cart/cart-service';
import { Burger } from './burger';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
@Injectable()
export class DesignComponent implements OnInit {

  allIngredients: Ingredient[];
  wraps = [];
  proteins = [];
  veggies = [];
  cheeses = [];
  sauces = [];
  burgerUrl = 'http://localhost:8080/api/burgers';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(private httpClient: HttpClient, public model: Burger) { }
  
  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};
  
  getAllIngredients(): Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>('http://localhost:8080/api/ingredients').pipe(
        map((result:any)=>{
           return result._embedded.ingredients;
        }));
  }
  
  addBurger (burger: Burger): Observable<Burger> {
    return this.httpClient.post<Burger>(this.burgerUrl, burger, this.httpOptions)
      .pipe(
        catchError(this.handleError('addBurger', burger))
      );
  }
  
  updateIngredients(ingredient, event) {
    if (event.target.checked) {
      this.model.ingredients.push(ingredient);
    } else {
      this.model.ingredients.splice(this.model.ingredients.findIndex(i => i === ingredient), 1);
    }
  }

  ngOnInit() {
    this.model.ingredients = [];
    this.getAllIngredients().subscribe((data: Ingredient[]) => {
      this.allIngredients = data;
      this.wraps = this.allIngredients.filter(w => w.type === 'CHIFLĂ');
      this.proteins = this.allIngredients.filter(p => p.type === 'PROTEINĂ');
      this.veggies = this.allIngredients.filter(v => v.type === 'LEGUME');
      this.cheeses = this.allIngredients.filter(c => c.type === 'BRÂNZĂ');
      this.sauces = this.allIngredients.filter(s => s.type === 'SOS');
    });
  }
  
  data = {'name': 'ang', 'ingredients': [{'id':'aaa','name':'mmm','type':'PROTEINĂ'},{'id':'aaa','name':'mmm','type':'CHIFLĂ'}]};
  onSubmit() {
    this.httpClient.post(
        this.burgerUrl,
        this.data, {
            headers: new HttpHeaders().set('Content-type', 'application/json'),
        }).subscribe(burger => console.log('+++'));
        
    console.log(this.data);
   // this.addBurger(this.model);
    console.log('***');
  //  this.cart.addToCart(model);
  //  this.router.navigate(['/cos']);
  }
}
