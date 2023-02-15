import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './pages/leitor/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthguardGuard } from './core/authguard/authguard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthguardGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
