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
  message = '';
  messages = [];

  constructor(private http: HttpClient, public accountService: AccountService) { }

  ngOnInit(): void {

    var pusher = new Pusher('your-key', {
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
      username: this.accountService.userString,
      message: this.message,
      timeStamp: timestamp
    }).subscribe( () =>
      this.message = ''
    );
  }



}
