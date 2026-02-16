import { Component } from '@angular/core';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.css'
})
export class UserStatusComponent {
  list = [{'nom':'A','status':'active'},
    {'nom':'B','status':'inactive'},
    {'nom':'C','status':'pending'}
  ]

}
