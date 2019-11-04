import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from './../message/message.model';
import { User } from '../user/user.model';

import { UsersService } from '../user/users.service';



@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})

export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(public UsersService: UsersService) { }

  ngOnInit() {
    this.UsersService.currentUser.subscribe(
      (user: User) => {
        this.currentUser = user;
        if (this.message.author && user) {
          this.incoming = this.message.author.id !== user.id;
        }
      });
  }

}
