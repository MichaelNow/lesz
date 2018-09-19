import { NgModule } from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { JoinComponent } from './join.component';
import { ContactComponent } from './contact.component';
import {AboutRoutingModule} from './about-routing.module';
import {BriefComponent} from './brief.component';
import {CultureComponent} from './culture.component';
import {BrandComponent} from './brand.component';
import {ConceptComponent} from './concept.component';
import {StyleComponent} from './style.component'
import {StateComponent} from './state.component';

@NgModule({
  imports: [
    AboutRoutingModule,
    CommonModule,
  ],
  declarations: [
    AboutComponent,
    JoinComponent,
    ContactComponent,
    BriefComponent,
    CultureComponent,
    BrandComponent,
    ConceptComponent,
    StyleComponent,
    StateComponent
  ],
  exports:[
    AboutComponent,
    RouterModule,
  ],
  providers: [AboutComponent],
})
export class AboutModule { }
