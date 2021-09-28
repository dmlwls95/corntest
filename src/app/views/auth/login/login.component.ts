import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule, Form } from '@angular/forms';
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {



  accountfrm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authServ: AuthService
  ) {
    this.accountfrm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
        Validators.pattern('(?=.*\d)(?=.*[a-z]).{8,}')
      ]))
    })
  }

  ngOnInit(): void {}
  
  submit(event){
    let formData = {
      email: this.accountfrm.get('email').value,
      password: this.accountfrm.get('password').value
    }
    
    this.authServ.adminSign(formData)
  }
}
