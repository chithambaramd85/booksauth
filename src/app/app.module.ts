import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './pages/left/left.component';
import { RightComponent } from './pages/right/right.component';
import { MiddleComponent } from './pages/middle/middle.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ContactmeComponent } from './pages/contactme/contactme.component';
import { VapLibraryComponent } from './pages/vap-library/vap-library.component';
import { MathServicesService } from './pages/services/math-services.service';
import { SqrtPipe } from './pages/pipes/sqrt.pipe';
import { ShortenPipe } from './pages/pipes/shorten.pipe';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { BookComponent } from './pages/book/book.component';
import { BookService } from './pages/services/book.service';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AuthService } from './pages/auth/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    MiddleComponent,
    HomeComponent,
    AboutmeComponent,
    ContactmeComponent,
    VapLibraryComponent,
    SqrtPipe,
    ShortenPipe,
    TemplateFormComponent,
    ReactiveFormComponent,
    BookComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MathServicesService, BookService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
