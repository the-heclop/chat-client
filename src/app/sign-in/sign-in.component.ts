import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { FormGroup, FormControl,  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

    constructor(public accountService: AccountService) { }

    ngOnInit(): void {}

    login() {

      this.accountService.login(this.loginForm.value).subscribe({
        next: response => {

        },
        error: error => alert('Invalid login')
      })
    }

}
