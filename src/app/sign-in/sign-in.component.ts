import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { FormGroup, FormControl,  ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    password: new FormControl(''),
  });

    constructor(public accountService: AccountService, private router: Router ) { }

    ngOnInit(): void {}


    currentUser() {
      if (this.loginForm.valid) {
        this.accountService.setUser(this.loginForm.value.username);
        this.router.navigate(['/chat']);
      }
    }


}
