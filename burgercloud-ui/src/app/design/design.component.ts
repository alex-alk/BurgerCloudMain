import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Ingredient } from './ingredient';
import { Router } from '@angular/router/';
import { CartService } from '../cart/cart-service';
import { Burger } from './burger';

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
  
  constructor(private model: Burger, private httpClient: HttpClient, 
    private cart: CartService, private router: Router) { 
    
  }
  
  getAllIngredients(): Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>('http://localhost:8080/api/ingredients').pipe(
        map((result:any)=>{
           return result._embedded.ingredients;
        }));
  }
  
  updateIngredients(ingredient, event) {
    if (event.target.checked) {
      this.model.ingredients.push(ingredient._links.ingredient.href);
    } else {
      this.model.ingredients.splice(this.model.ingredients.findIndex(i => i === ingredient), 1);
    }
  }

  ngOnInit() {
  
    if(!sessionStorage.getItem('user')){
      this.router.navigate(['/login']);
    }
    let userl= JSON.parse(sessionStorage.getItem('user'));
    let link =  userl._links.self.href;
    this.model.user = link;
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
  
  onSubmit() {
    this.httpClient.post(
        this.burgerUrl,
        this.model, {
            headers: new HttpHeaders().set('Content-type', 'application/json'),
        }).subscribe(burger => console.log('-------added to db--------'));
    this.router.navigate(['/succes']);
  }
}
