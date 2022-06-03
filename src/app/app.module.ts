import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TaskListComponent } from './tasks/task-list/task-list.component';
//import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
//import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskOpeningComponent } from './task-opening/task-opening.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { QuillModule } from 'ngx-quill';
import { TaskVisualizationComponent } from './task-visualization/task-visualization.component';
import { ProceedingRegisterComponent } from './proceeding-register/proceeding-register.component';
//import { CreateAccountComponent } from './account/create-account/create-account.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserListComponent } from './user-list/user-list.component';
import { UserVisualizationComponent } from './user-visualization/user-visualization.component';
import { TextMaskModule } from 'angular2-text-mask';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export var options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    //TaskListComponent,
    //TaskListItemComponent,
    //TaskFormComponent,
    LoginComponent,
    TaskListComponent,
    TaskOpeningComponent,
    AuthenticationComponent,
    HomeComponent,
    FormDebugComponent,
    SidenavComponent,
    NavbarComponent,
    BodyComponent,
    TaskVisualizationComponent,
    ProceedingRegisterComponent,
    UserListComponent,
    UserVisualizationComponent
    //CreateAccountComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    QuillModule.forRoot(),
    NgxMaskModule.forRoot(options)
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [
    ProceedingRegisterComponent,
    UserVisualizationComponent
  ]
})
export class AppModule { }
