import { Ingredient } from './ingredient';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Burger {
  
  constructor() { }
  name: string;
  ingredients: Ingredient[];
}
