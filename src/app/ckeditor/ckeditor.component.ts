import {Component, Input} from '@angular/core'
import { CKEditorService } from './ckeditor.service';


declare const window: any;

@Component({
    selector: 'ckeditor',
    templateUrl: './ckeditor.component.html',
    styleUrls: ['./ckeditor.component.css']
})
export class CKEditorComponent{ 
    constructor(private editorService: CKEditorService){}
    private title = "2018-06-07";
    private body = "<h1>hello editor<h1><p>this is an article</p>";
    private inedit = false;
    ngOnInit(){
       if(window.CKEDITOR) {
           window.CKEDITOR.replace('editor1', {
               width: '100%',
               height: '500px',
           });
       }
    }

    submit() {
        this.body =  window.CKEDITOR.instances.editor1.getData();
        this.inedit = false;
        this.editorService.saveArticle(this.title, this.body).subscribe((result) => {
            console.log(result + "");
            this.inedit = false;
        }, (error) => {

        });
    }

    edit() {
        this.inedit = true;
    }

    cancel() {
        this.inedit = false;
    }
}
