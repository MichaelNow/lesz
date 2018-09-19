import { NgModule } from '@angular/core';

import { ServiceComponent } from './service.component';

@NgModule({
  declarations: [
    ServiceComponent
  ],
  exports:[ServiceComponent],
  providers: [ServiceComponent],
})
export class ServiceModule { }
