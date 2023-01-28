import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, NavComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
