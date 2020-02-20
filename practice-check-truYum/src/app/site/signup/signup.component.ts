import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  private passwordNotSame:boolean
  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { }

  userCreationForm = this.formBuilder.group({
    username:['',[Validators.required, Validators.maxLength(50)]],
    firstName:['',[Validators.required, Validators.maxLength(200)]],
    lastName:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(8)]],
    role:['customer']
  })

  onSubmit() {
    this.userService.addUser(this.userCreationForm.getRawValue())
    console.log(this.userCreationForm.getRawValue())
    console.log(this.userService.userList)
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

  onConfirmPassword(event:any){
    if(event.target.value != this.userCreationForm.value['password'])
    {
      this.passwordNotSame = true;
    }
    else
    {
      this.passwordNotSame = false;
    }
  }

  onPassword(event:any,password:string){
    this.passwordNotSame = true;
    if(event.target.value != password)
    {
      this.passwordNotSame = true;
    }
    else
    {
      this.passwordNotSame = false;
    }
  }
}
