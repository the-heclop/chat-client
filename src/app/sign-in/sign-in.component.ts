import { Component, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { FormGroup, FormControl,  ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
     username = '';

    constructor(public accountService: AccountService, private router: Router ) { }

    ngOnInit(): void {}

    login() {
      this.accountService.login(this.loginForm.value).subscribe({
        next: () => {
          alert('Login successful');
          this.loginForm.reset();
          const user = JSON.parse(localStorage.getItem('user').toString());
          this.username = user.username;
          this.router.navigate(['/chat']);
        },
        error: error => alert('Invalid login')
      })
    }

}
