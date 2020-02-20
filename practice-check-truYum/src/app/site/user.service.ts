import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: IUser[] = [
    {username:'admin', firstName: 'Kaarthikeyan', lastName: 'Raghavan', password:'admin', role: 'admin'},
    {username:'sree', firstName: 'Sree', lastName: 'Ranjhani', password:'sree', role: 'customer'},
    {username:'adminSru', firstName: 'Sruthi', lastName: 'Polaki', password:'admin', role: 'admin'},
  ]
  constructor() { }

  addUser(userToBeAdded:IUser){
    this.userList.push(userToBeAdded);
  }

  getUser(username:string){
    return this.userList.find(user => user.username === username );
  }

  
}