import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core'
import {RecordsComponent} from './records.component'
import { RecordItemComponent } from './item/item.component';
@NgModule({
    declarations: [RecordsComponent, RecordItemComponent],
    imports: [BrowserModule],
    exports: [RecordsComponent]
})
export class RecordsModule {

}