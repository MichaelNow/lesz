import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { CaseComponent } from './case/case.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'service', component: ServiceComponent},
    { path: 'case', component: CaseComponent},
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}