import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'src/backend/api/user.service';
import Swal from 'sweetalert2';
import { AlertService } from '../core/services/alert.service';

@Component({
  selector: 'app-user-visualization',
  templateUrl: './user-visualization.component.html',
  styleUrls: ['./user-visualization.component.scss']
})
export class UserVisualizationComponent implements OnInit {

  userForm: FormGroup

  user = {
    Name: '',
    Login: '',
    Password: '',
    Email: '',
    Cpf: 0,
    Phone: 0,
    UserId: ''
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<UserVisualizationComponent>,
    private alertService : AlertService,
    private userService : UserService,
    private router : Router
  ) { 
    this.user.Name = data.name,
    this.user.Login = data.login,
    this.user.Password = data.password,
    this.user.Email = data.email,
    this.user.Cpf = data.cpf,
    this.user.Phone = data.phone,
    this.user.UserId = data.userId,
    dialogRef.backdropClick().subscribe(() => {
      this.defaultRoute();
    })
  }

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
        await this.userService.updateUser(this.user);
        this.defaultRoute();
        this.dialogRef.close([]);
      } else {
        throw 'Favor preencher os campos requeridos.';
      }
    }
    catch (error) {
      this.alertService.error(error);
    }
  }

  async removeUser(){
    try{
      Swal.fire({
        title: 'Tem certeza que deseja excluir esta conta?',
        text: "Caso o usuário esteja sob controle de alguma tarefa, ela não podera ser reassumida por outra pessoa!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#302638',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Excluir conta',
        focusConfirm: false,
        focusCancel: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.userService.deleteUser(this.user.UserId);
          this.defaultRoute();
          this.dialogRef.close([]);
        }
      })
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

  defaultRoute(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/user']));
  }
}
