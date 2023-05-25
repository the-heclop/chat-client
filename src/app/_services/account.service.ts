import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class AccountService {
  baseUrl = 'https://localhost:7226/';
  private currentUserSource = new BehaviorSubject<string>('');
  currentUser$ = this.currentUserSource.asObservable();
  userString = '';


  setUser(user: string) {
    this.currentUserSource.next(user);
    this.userString = user;
  }

}

