import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { BookComponent } from './pages/book/book.component';
import { ContactmeComponent } from './pages/contactme/contactme.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { VapLibraryComponent } from './pages/vap-library/vap-library.component';

const routes: Routes = [
  {path:'', redirectTo:'book', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'vap-library', component:VapLibraryComponent},
  {path:'aboutme', component:AboutmeComponent},
  {path:'contactme', component:ContactmeComponent},
  {path:'template-form', component:TemplateFormComponent},
  {path:'reactive-form', component:ReactiveFormComponent},
  {path:'book', component:BookComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
