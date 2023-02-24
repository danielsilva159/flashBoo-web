import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthguardGuard } from './core/authguard/authguard.guard';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './core/layout/header/header.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthguardGuard] },
  { path: 'reader', component: HeaderComponent, canActivate: [AuthguardGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
