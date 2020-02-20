import { Component, OnInit } from '@angular/core';
import { IFoodItem } from 'src/app/food/item-info/food-item-interface'
import { FoodService } from '../food.service';
import { CartService } from 'src/app/shopping/cart/cart.service';
import { AuthService } from 'src/app/site/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  foodItemList:IFoodItem[]
  filteredFoodItemList:IFoodItem[]
  
  constructor(private foodService: FoodService, private cartService:CartService, private authService:AuthService, private router:Router) { }
  
  ngOnInit() {
    this.foodItemList = this.foodService.getFoodItems()
    this.filteredFoodItemList = this.foodItemList
    this.foodService.getFoodFilter().subscribe(
      (name:string) => {
        if(name!='')
          this.filteredFoodItemList = this.foodService.getFilteredFoodItems(name,this.foodItemList) 
        else if(name=='')
          this.filteredFoodItemList = this.foodItemList
      }
    )
  }

  addToCart(itemId:number){
    if(!this.authService.loggedInUser)
    {
      this.router.navigateByUrl('/cart')
    }
    this.cartService.addToCart(itemId)
  }
}
