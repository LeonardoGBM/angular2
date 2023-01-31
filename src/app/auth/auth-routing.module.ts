import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';


const routes: Routes=[
  { path:'login/register', component: AuthComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
] 
@NgModule({
  declarations: [], 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
})
export class AuthRoutingModule { }
