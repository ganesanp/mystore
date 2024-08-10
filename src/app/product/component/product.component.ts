import { Product } from '../model/product.model';
import { AppState } from '../../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;
  count: number = 0;
  private selectedItem: Product;
  private itemSelected: boolean;

  constructor(private store: Store<AppState>) {
    this.products = this.store.select((state) => state.product);
    console.log(' this.products', this.products);
  }
  addProduct(name: any, price: any, quantity: any) {
    this.count++;
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product>{
        id: this.count,
        name: name,
        price: price,
        quantity: quantity,
        total: price * quantity,
      },
    });
  }
  removeProduct() {
    if (this.itemSelected) {
      this.store.dispatch({
        type: 'REMOVE_PRODUCT',
        payload: <Product>{
          id: this.selectedItem.id,
          name: this.selectedItem.name,
          price: this.selectedItem.price,
        },
      });
      this.itemSelected = false;
    }
  }
  onSelect(event: any, product: Product) {
    console.log('id:', event.target.checked);
    if (event.target.checked) {
      this.itemSelected = true;
      this.selectedItem = product;
    }
  }
  ngOnInit() {}
}
