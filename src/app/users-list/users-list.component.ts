import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  Users: any = [];
  constructor(public userService: UserService,public actRoute:ActivatedRoute,public router:Router) {}
  ngOnInit() {
    this.loadUsers();
  }
  // Get employees list
  loadUsers() {
    return this.userService.getUsers().subscribe((data: any) => {
      this.Users = data['data'];
      console.log(data)
    });
  }
  // Delete employee
 /*  deleteEmployee(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.userService.deleteEmployee(id).subscribe((data) => {
        this.loadEmployees();
      });
    }
  }
 */
}
