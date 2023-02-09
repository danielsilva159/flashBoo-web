import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './leitor/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [CommonModule, SharedModule, CoreModule],
})
export class PagesModule {}
