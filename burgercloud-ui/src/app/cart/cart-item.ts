export class CartItem {

  quantity = 1;

  burger: any;

  constructor(burger: any) {
    this.burger = burger;
  }

  get lineTotal() {
    return this.quantity * 4.99;
  }

}
