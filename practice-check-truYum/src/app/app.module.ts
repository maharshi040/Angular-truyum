import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemComponent } from './food/item-info/food-item.component';
import { FoodMenuComponent } from './food/menu/food-menu.component';
import { FoodSearchComponent } from './food/search/food-search.component';
import { CartComponent } from './shopping/cart/cart.component';
import { RouterModule } from '@angular/router';
import { FoodItemEditComponent } from './food/item-edit/food-item-edit.component';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { HeaderComponent } from './site/header/header.component';
import { AuthGuardService } from './site/auth-guard.service';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { HomeComponent } from './site/home/home.component';
import { PageNotFoundComponent } from './site/page-not-found/page-not-found.component';
import { FooterComponent } from './site/footer/footer.component';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent,
    FoodMenuComponent,
    FoodSearchComponent,
    CartComponent,
    FoodItemEditComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    UserProfileComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'menu',component:FoodMenuComponent},
      {path:'cart',component:CartComponent,canActivate:[AuthGuardService]},
      {path:'edit/:id',component:FoodItemEditComponent,canActivate:[AuthGuardService]},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'profile/:username',component:UserProfileComponent,canActivate:[AuthGuardService]},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent}
    ]),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }