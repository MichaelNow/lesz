import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  exports:[FooterComponent],
  providers: [FooterComponent],
})
export class FooterModule { }
