import { IFoodItem } from 'src/app/food/item-info/food-item-interface';

export interface ICart{
    cartItems: IFoodItem[]
    total: number
}