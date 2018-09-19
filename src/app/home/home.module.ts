import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import {CarouselModule} from '../carousel/carousel.module'

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CarouselModule
  ],
  exports:[HomeComponent],
  providers: [HomeComponent],
})
export class HomeModule { }
