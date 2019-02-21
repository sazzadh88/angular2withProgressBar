import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterResolver } from './router.resolver';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent, pathMatch: 'full'
  },
  {
    path:'about', component: AboutComponent, resolve :{ crisis: RouterResolver }
  },
  {
    path:'contact', component: ContactComponent, resolve :{ crisis: RouterResolver }
  },
  {
    path:'login', component: LoginComponent, resolve :{ crisis: RouterResolver }
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
