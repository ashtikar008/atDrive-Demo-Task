import { Component, OnInit } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from './userList.model';
import { UserServiceService } from './services/user-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  text: string | null = null;
  users: User[] = [];
  error: string | null = null;

  constructor(private userService: UserServiceService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getallData();
  }

  getallData() {
    this.spinner.show();

    this.userService.GetAllData('/users').pipe(
      finalize(() => this.spinner.hide()),
      catchError(error => {
        this.error = 'Failed to fetch user data';
        return throwError(error);
      })
    ).subscribe((res: any) => {
      this.users = res;
    });
  }

  search() {
    if (this.text) {
      const searchText = this.text.trim().toLowerCase();
      this.users = this.users.filter(user =>
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText)
      );
    } else {
      this.getallData();
    }
  }
}
