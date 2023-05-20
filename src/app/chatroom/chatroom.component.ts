import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { Observable, of } from 'rxjs';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
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
