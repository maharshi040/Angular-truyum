import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFoodItem } from './food-item-interface';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/site/auth.service';
import { CartService } from 'src/app/shopping/cart/cart.service';

@Component({
  selector: 'app-food-item-info',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input('theFoodItem') foodItem:IFoodItem;
  isAdmin:boolean = false
  @Output() addToCartRequest: EventEmitter<number> = new EventEmitter<number>()
  constructor(private foodService: FoodService, private router:Router, private authService:AuthService, private cartService:CartService) {}

  ngOnInit() {
    this.isAdmin = this.isAdminCheck()
  }

  onAddToCart(itemId:number){
    this.addToCartRequest.emit(itemId);
  }

  onEdit(itemId:number){
    this.router.navigateByUrl('/edit/'+itemId);
  }
  isAdminCheck()
  {
    return this.authService.isAdmin
  }
}
