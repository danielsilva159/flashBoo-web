import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadEpubComponent } from './components/read-epub/read-epub.component';
import { ToEnterComponent } from './components/to-enter/to-enter.component';
import { RegisterComponent } from './components/register/register.component';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [ReadEpubComponent, ToEnterComponent, RegisterComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule,
  ],
  exports: [
    ReadEpubComponent,
    ToEnterComponent,
    RegisterComponent,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class SharedModule {}
