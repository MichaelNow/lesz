import {Component} from "@angular/core"
import { HttpService } from "../utils/http.service";
@Component({
    selector: 'records',
    templateUrl: './records.component.html'
})
export class RecordsComponent{
    items: any=[];
    constructor(private httpService: HttpService){}
    ngOnInit(){
        this.httpService.get("/record/list").subscribe((result) => {
            this.items = result;
        });
    }
}