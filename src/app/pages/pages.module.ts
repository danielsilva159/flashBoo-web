import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { ReaderComponent } from './reader/reader.component';
import { HomeComponent } from './home/home.component';

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12,
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 20,
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease',
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50,
    },
    shift: {
      speed: 300,
      easing: 'ease',
    },
    overlap: 150,
  },
};

@NgModule({
  declarations: [HomeComponent, LoginComponent, ReaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    NotifierModule.withConfig(customNotifierOptions),
  ],
})
export class PagesModule {}
