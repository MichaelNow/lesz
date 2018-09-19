import {NgModule} from '@angular/core'
import { CKEditorComponent } from './ckeditor.component';
import { CKEditorService } from './ckeditor.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [CKEditorComponent],
    imports: [BrowserModule, FormsModule],
    exports: [CKEditorComponent],
    providers: []
})
export class CKEditorModule{

}
