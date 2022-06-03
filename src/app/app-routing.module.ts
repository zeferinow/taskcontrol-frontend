import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuardGuard } from './app-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TaskOpeningComponent } from './task-opening/task-opening.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskVisualizationComponent } from './task-visualization/task-visualization.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'task', pathMatch: 'full'},
      { path: 'task', 
        children: [
        { path: '', redirectTo: 'list', pathMatch: 'full'},
        { path: 'list', component: TaskListComponent},
        { path: 'opening', component: TaskOpeningComponent},
        { path: ':id', component: TaskVisualizationComponent}
      ]},
      { path: 'user', 
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full'},
          { path: 'list', component: UserListComponent}
        ]
      }
    ],
    canActivate: [AppGuardGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
