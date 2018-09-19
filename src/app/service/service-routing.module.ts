import { NgModule } from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { FeatureComponent } from './feature.component';
import { ContentComponent } from './content.component';
import { ProcessComponent } from './process.component';
import { AreaComponent } from './area.component';
import { ServiceComponent } from './service.component';

const crisisCenterRoutes: Routes = [{
    path: 'service',
    component: ServiceComponent,
    children: [
      {
        path: '',
        component: FeatureComponent,
      },{
        path: 'feature',
        component: FeatureComponent,
      }, {
        path: 'content',
        component: ContentComponent,
      }, {
        path: 'process',
        component: ProcessComponent,
      }, {
        path: 'area',
        component: AreaComponent,
      }
    ]
  }];

  

@NgModule({
    imports: [
      RouterModule.forChild(crisisCenterRoutes),
    ],
    exports:[
      RouterModule
    ],
  })
  export class ServiceRoutingModule { }
  