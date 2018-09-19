import {Component, Input} from '@angular/core'

@Component({
    selector: 'record-item',
    templateUrl: './item.component.html' 
})
export class RecordItemComponent{
    @Input() title: string;
    @Input() id: string;
}