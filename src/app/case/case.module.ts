import { NgModule } from '@angular/core';

import { CaseComponent } from './case.component';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CaseComponent
  ],
  imports: [CommonModule],
  exports:[CaseComponent],
  providers: [CaseComponent],
})
export class CaseModule { }
