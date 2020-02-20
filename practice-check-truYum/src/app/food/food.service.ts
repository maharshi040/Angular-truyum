import { Injectable } from '@angular/core';
import { IFoodItem } from './item-info/food-item-interface';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient){}

  foodItems:IFoodItem[] = [
    {id:1,name:"Sandwich",price:99,dateOfLaunch:new Date("15 Mar 2017"),category:"Main Course",active:true,freeDelivery:true,imageUrl:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
    {id:2,name:"Burger",price:129,active:true,dateOfLaunch:new Date('12/23/2017'),category:"Main Course",freeDelivery:false,imageUrl:"https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
    {id:3,name:"Pizza",price:149,active:true,dateOfLaunch:new Date('08/21/2018'),category:"Main Course",freeDelivery:false,imageUrl:"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"},
    {id:4,name:"French Fries",price:57,active:false,dateOfLaunch:new Date('07/02/2017'),category:"Starters",freeDelivery:true,imageUrl:"https://images.unsplash.com/photo-1526230427044-d092040d48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
    {id:5,name:"Chocolate Brownie",price:32,active:true,dateOfLaunch:new Date('11/02/2022'),category:"Dessert",freeDelivery:true,imageUrl:"https://images.unsplash.com/photo-1559490882-9f907ae78499?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"}
  ]

  categories:string[] = ["Main Course","Starters","Dessert"]

  getCategories():string[]{
    return this.categories
  }

  getFoodItems(): IFoodItem[]{
    return this.foodItems
  }

  foodFilter = new Subject();

  getFoodFilter():Subject<Object>{
    return this.foodFilter
  }

  getFoodItem(itemId:number):IFoodItem{
    return this.foodItems[this.foodItems.findIndex(item => item.id == itemId)]
  }

  getFilteredFoodItems(name: string, foodItems: IFoodItem[]): IFoodItem[]{
    if(name!=''){
      const result = foodItems.filter(item => item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
      return result ? result : []
    }
  }

  updateFoodItem(foodItem:IFoodItem){
    console.log(foodItem)
    let itemIndex:number = this.foodItems.findIndex(item => item.id == foodItem.id)
    this.foodItems[itemIndex] = foodItem
    console.log(this.foodItems[itemIndex])
  }
}
