import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {RecordsModule} from './records/records.module'
import {CKEditorModule} from "./ckeditor/ckeditor.module"
import {UtilsModule} from "./utils/utils.module"
import { HttpService } from './utils/http.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RecordsModule,
    CKEditorModule,
    UtilsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
