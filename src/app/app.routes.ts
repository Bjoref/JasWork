import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'blog', component: BlogPageComponent },
    { path: 'registration', component: RegistrationPageComponent },
    { path: 'main', component: MainPageComponent, canActivate: [AuthGuard] }
  ];
