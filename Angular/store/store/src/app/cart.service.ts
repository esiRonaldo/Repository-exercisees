import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    this.items.push(product)
  }

  getItems(): Product[] {
    return this.items
  }

  clearCart(): Product[] {
    this.items = []
    return this.items
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }
}