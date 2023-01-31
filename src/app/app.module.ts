import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './pages/leitor/home/home.component';
import { ReadyEpubComponent } from './pages/components/ready-epub/ready-epub.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ReadyEpubComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
