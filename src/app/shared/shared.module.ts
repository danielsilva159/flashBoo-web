import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadEpubComponent } from './components/read-epub/read-epub.component';
import { ToEnterComponent } from './components/to-enter/to-enter.component';
import { RegisterComponent } from './components/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReadEpubComponent, ToEnterComponent, RegisterComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
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
