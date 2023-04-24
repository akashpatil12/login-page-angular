import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './include/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { FooterComponent } from './include/footer/footer.component';
import { ForgetpassComponent } from './pages/forgetpass/forgetpass.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ForgetpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
