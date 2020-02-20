import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFoodItem } from '../item-info/food-item-interface';
import { FoodService } from '../food.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-food-item-edit',
  templateUrl: './food-item-edit.component.html',
  styleUrls: ['./food-item-edit.component.css']
})
export class FoodItemEditComponent implements OnInit {
  foodItem: IFoodItem
  itemId: number
  dateOfLaunch: Date
  foodCategories: string[]
  itemEditForm
  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute, private foodService:FoodService, private router:Router,public datepipe: DatePipe) { }

  ngOnInit() {
    this.itemId = this.activatedRoute.snapshot.params['id'] as number
    this.foodItem = this.foodService.getFoodItem(this.itemId)
    this.foodCategories = this.foodService.getCategories()
    console.log(this.foodItem)
    this.itemEditForm = this.formBuilder.group({
      name:[this.foodItem.name,[Validators.required, Validators.maxLength(200)]],
      price:[this.foodItem.price,Validators.required],
      dateOfLaunch:[this.datepipe.transform(this.foodItem.dateOfLaunch,'yyyy-MM-dd'),Validators.required],
      category:[this.foodItem.category,Validators.required],
      active:[this.foodItem.active],
      freeDelivery:[this.foodItem.freeDelivery],
    })
    console.log(this.itemEditForm)
  }

  

  updateFoodItem()
  {
    this.foodItem.id = this.foodItem.id
    this.foodItem.name = this.itemEditForm.value['name']
    this.foodItem.price = this.itemEditForm.value['price']
    this.foodItem.dateOfLaunch = this.itemEditForm.value['dateOfLaunch']
    this.foodItem.category = this.itemEditForm.value['category']
    this.foodItem.active = this.itemEditForm.value['active']
    this.foodItem.freeDelivery = this.itemEditForm.value['freeDelivery']
    console.log(this.foodItem)
    this.foodService.updateFoodItem(this.foodItem)
    if(confirm('Item Details saved successfully. Click OK to return to Menu List'))
    {
      this.router.navigateByUrl('/menu')
    }
  }

  get active(){
    return this.itemEditForm.get('active')
  }

  getItemName()
  {
    return this.foodItem.name
  }
}
