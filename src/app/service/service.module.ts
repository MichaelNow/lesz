import { NgModule } from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { CommonModule } from '@angular/common';

import {ServiceRoutingModule} from './service-routing.module';

import { FeatureComponent } from './feature.component';
import { ContentComponent } from './content.component';
import { ProcessComponent } from './process.component';
import { AreaComponent } from './area.component';
import { ServiceComponent } from './service.component';
// import {CultureComponent} from './culture.component';
// import {BrandComponent} from './brand.component';
// import {ConceptComponent} from './concept.component';
// import {StyleComponent} from './style.component'
// import {StateComponent} from './state.component';

@NgModule({
  imports: [
    ServiceRoutingModule,
    CommonModule,
  ],
  declarations: [
    FeatureComponent,
    ContentComponent,
    ProcessComponent,
    AreaComponent,
    ServiceComponent
  ],
  exports:[
    ServiceComponent,
    RouterModule,
  ],
  providers: [ServiceComponent],
})
export class ServiceModule { }
