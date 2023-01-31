import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoFoundComponentComponent } from './no-found-component/no-found-component.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponent } from './shared/shared.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
    declarations: [
      AppComponent,
      PagesComponent,
      AuthComponent,
      SharedComponent,
      NoFoundComponentComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      PagesModule,
      SharedModule,
      AuthModule
    ],
    exports:[
      AppComponent,
      PagesComponent,
      AuthComponent,
      SharedComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
