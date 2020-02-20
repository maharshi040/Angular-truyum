import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent implements OnInit {
  constructor(private foodService: FoodService) { }
  
  ngOnInit() {
  }

  onSearch(event:any){
    // console.log(event.target.value);
    this.foodService.getFoodFilter().next( event.target.value );
  }
}
