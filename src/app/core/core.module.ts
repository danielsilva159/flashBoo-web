import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [MainLayoutComponent, NavComponent],
})
export class CoreModule {}
