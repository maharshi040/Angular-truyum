import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from 'src/app/shopping/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService, private cartService:CartService) { }

  ngOnInit() {
  }

  getUser(){
    return this.authService.loggedInUser
  }

  isAdmin()
  {
    return this.authService.isAdmin
  }

  onLogout()
  {
    this.cartService.clearCart()
    this.authService.logout();
  }
}
