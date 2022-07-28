import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  id=this.actRoute.snapshot.params['id'];
  userData:any={};
  constructor(public userService: UserService,public actRoute:ActivatedRoute,public router:Router) {}

  ngOnInit(): void {
    this.userService.getUser(this.id).subscribe((data:any)=>{
      this.userData=data['data'];
      console.log(this.id,"user Details",this.userData)
    })
  }

}
