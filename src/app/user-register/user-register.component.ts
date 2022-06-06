import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'src/backend/api/user.service';
import { AlertService } from '../core/services/alert.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userForm: FormGroup

  user = {
    Name: '',
    Login: '',
    Password: '',
    Email: '',
    Cpf: null,
    Phone: null,
    UserId: ''
  }

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
    private dialogRef: MatDialogRef<UserRegisterComponent>
  ) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      Name: new FormControl(this.user.Name, Validators.required),
      Login: new FormControl(this.user.Login, Validators.required),
      Password: new FormControl(this.user.Password, Validators.required),
      Email: new FormControl(this.user.Email),
      Cpf: new FormControl(this.user.Cpf, Validators.required),
      Phone: new FormControl(this.user.Phone)
    });
  }

  async onSubmit() {
    try{
      if(this.userForm.valid){
        this.addUserValueAttribution();
        await this.userService.addUser(this.user);
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/user']));
        this.dialogRef.close([]);
      } else {
        throw 'Favor preencher os campos requeridos.';
      }
    }
    catch (error) {
      this.alertService.error(error);
    }
  }

  addUserValueAttribution(){
    this.user.Name = this.userForm.value.Name;
    this.user.Login = this.userForm.value.Login;
    this.user.Password = this.userForm.value.Password;
    this.user.Email = this.userForm.value.Email;
    this.user.Cpf = this.userForm.value.Cpf;
    this.user.Phone = this.userForm.value.Phone;
  }
}
