import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { AccountService } from './_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from './_models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser$: Observable<User | null> = of(null);
  username = 'username';
  message = '';
  messages = [];

  constructor(private http: HttpClient, public accountService: AccountService) { }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    var pusher = new Pusher('d75b346e98c76eee2887', {
      cluster: 'mt1'
    });

    var channel = pusher.subscribe('chat');
    channel.bind('message',  (data) => {
      this.messages.push(data);
    });

  }

  send(): void {
    let timestamp = new Date().toLocaleTimeString();
    this.http.post('https://localhost:7189/api/chat/messages', {
      username: this.username,
      message: this.message,
      timeStamp: timestamp
    }).subscribe( () =>
      this.message = ''
    );
  }



}
