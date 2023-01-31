import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NoFoundComponentComponent } from './no-found-component/no-found-component.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes: Routes = [
  { path: '', redirectTo:'pages', pathMatch:'full'},
  { path: '**' , component:NoFoundComponentComponent },
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
