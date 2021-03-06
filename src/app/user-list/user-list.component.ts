import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { user } from 'src/backend';
import { UserService } from 'src/backend/api/user.service';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { UserVisualizationComponent } from '../user-visualization/user-visualization.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: user[];

  constructor(
    private userService: UserService,
    private dialogRef: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTaskList();
  }

  getTaskList(){
    this.userService.getUserList().subscribe(
      user => {
        this.users = user;
        console.log(this.users)
      }
    );
  }

  userVisualization(user){
    this.dialogRef.open(UserVisualizationComponent, { 
      data: user,
      panelClass: 'custom-dialog-container' 
    });
    this.router.navigate([`user/${user.userId}`]);
  }

  userRegister(){
    this.dialogRef.open(UserRegisterComponent, {
      panelClass: 'custom-dialog-container'
    });
  }
}