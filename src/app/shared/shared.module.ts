import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadEpubComponent } from './components/read-epub/read-epub.component';

@NgModule({
  declarations: [ReadEpubComponent],
  imports: [CommonModule],
  exports: [ReadEpubComponent],
})
export class SharedModule {}
