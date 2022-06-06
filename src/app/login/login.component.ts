import { Router } from '@angular/router';
import { LoginService } from 'src/backend/api/login.service';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = {
    Password: '',
    UserLogin: ''
  };

  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      UserLogin: new FormControl('',Validators.required),
      Password: new FormControl('',Validators.required)
    });
  }

  async onSubmit() {
    try {
      this.addLoginAttribution();
      const result = await this.loginService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      // navego para a rota vazia novamente
      this.router.navigate(['']);
    } catch (error) {
      this.alertService.error(error);
    }
  }

  addLoginAttribution(){
    this.login.Password = this.loginForm.value.Password;
    this.login.UserLogin = this.loginForm.value.UserLogin;
  }
}
