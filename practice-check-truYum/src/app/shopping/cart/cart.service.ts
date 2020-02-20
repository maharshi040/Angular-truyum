import { Injectable, Output, EventEmitter } from '@angular/core';
import { ICart } from './cart';
import { IFoodItem } from 'src/app/food/item-info/food-item-interface';
import { FoodService } from 'src/app/food/food.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private foodService:FoodService){}
  foodItemList: IFoodItem[] = this.foodService.getFoodItems()
  cart: ICart = {cartItems:[],total:0}
  cartItemAdded:boolean = false
  itemToBeAdded:IFoodItem
  @Output() cartUpdated = new EventEmitter()
  getCartItems():IFoodItem[]{
    return this.cart.cartItems //should be changed to cart items
  }

  calculateTotal():number{
    let totalValue: number = 0;
    for(let item of this.getCartItems())
    {
      totalValue = (totalValue as number) + (item.price as number)
    }
    this.cart.total = totalValue
    return this.cart.total
  }

  addToCart(itemId:number){
    if(itemId>0)
    {
      console.log(itemId)
      this.itemToBeAdded = this.foodService.getFoodItem(itemId)
      this.cart.cartItems.push(this.itemToBeAdded)
      this.cartItemAdded = true
      setTimeout(()=>{
        this.cartItemAdded = false
      },1000)
    }
    else
    {
      console.log(itemId)
    }
  }
  deleteFromCart(itemId:number){
    this.cart.cartItems.splice(this.cart.cartItems.findIndex(item => item.id == itemId),1)
  }

  clearCart()
  {
    this.cart = {cartItems:[],total:0}
  }
}
