import {Injectable} from "@angular/core"
import { HttpService } from "../utils/http.service";
import {CKEditorModule} from "./ckeditor.module"

@Injectable({
    providedIn: 'root'
})
export class CKEditorService {

    constructor(private httpService: HttpService) {
    }
    saveArticle(title:string, body: string){
        return this.httpService.post("/record/save", {title: title, body: body});
    }
}