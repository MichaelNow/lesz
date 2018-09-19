import { NgModule } from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { AboutComponent } from './about.component';
import { JoinComponent } from './join.component';
import { ContactComponent } from './contact.component';
import {BriefComponent} from './brief.component';
import {CultureComponent} from './culture.component'
import {BrandComponent} from './brand.component';
import {ConceptComponent} from './concept.component';
import {StyleComponent} from './style.component';
import {StateComponent} from './state.component'

const crisisCenterRoutes: Routes = [{
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: '',
        component: BriefComponent,
      },{
        path: 'brief',
        component: BriefComponent,
      }, {
        path: 'culture',
        component: CultureComponent,
      }, {
        path: 'concept',
        component: ConceptComponent,
      }, {
        path: 'brand',
        component: BrandComponent,
      }, {
        path: 'style',
        component: StyleComponent,
      },{
        path: 'join',
        component: JoinComponent
      }, {
        path: 'contact',
        component: ContactComponent,
      }, {
        path: 'state',
        component: StateComponent,
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
  export class AboutRoutingModule { }
  