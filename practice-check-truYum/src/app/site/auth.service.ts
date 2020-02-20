import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser:IUser = null
  isAdmin:boolean = false
  constructor(private userService:UserService,private router:Router) { }

  authenticate(username:string,password:string)
  {
    this.loggedInUser = this.userService.getUser(username)
    if(this.loggedInUser!=null && this.loggedInUser.username == username && this.loggedInUser.password == password)
    {
      if(this.loggedInUser.role == 'admin')
      {
        this.isAdmin = true
      }
      else {
        this.isAdmin = false
      }
      return this.loggedInUser
    }
    else
    {
      return null
    }
  }

  logout()
  {
    this.loggedInUser = null
    this.isAdmin = false
    this.router.navigateByUrl('/login');
  }
}
