import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UserResolveService} from './services/user-resolve.service';
import {ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';

const userRoute = {
  path: '',
  component: AllUsersComponent,
  resolve: {allUsers: UserResolveService},
  children: [
    {path: ':id', component: UserComponent}
  ]
};

@NgModule({
  declarations: [AllUsersComponent, UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      userRoute
    ]),
    ReactiveFormsModule
  ]
})
export class UserModule { }
