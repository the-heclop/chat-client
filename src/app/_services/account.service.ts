import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})



export class AccountService {
  baseUrl = 'https://landingpageang.azurewebsites.net/';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  private user = {
    username: '',
    token: ''
  }

  constructor(private http: HttpClient) { }

  login(loginForm: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', loginForm).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
