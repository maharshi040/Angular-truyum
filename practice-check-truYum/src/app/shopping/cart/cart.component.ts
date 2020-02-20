import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { IFoodItem } from 'src/app/food/item-info/food-item-interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartService:CartService) { }
  
  cartItems: IFoodItem[]
  total: number
  
  ngOnInit() {
    this.cartItems = this.cartService.getCartItems()
    this.total = this.cartService.calculateTotal()
  }

  onRemoveItem(itemId:number){
    this.cartService.deleteFromCart(itemId)
    this.total = this.cartService.calculateTotal()
  }
}