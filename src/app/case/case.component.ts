import { Component } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent {
  //   title = 'app';
  cc = '1';
  private isa: boolean = true;
  private isb: boolean = false;
  private isc: boolean = false;
  func(i) {
    if(i == 0) {
      this.isa = true;
      this.isb = false;
      this.isc = false;
    } else if(i == 0) {
      this.isa = false;
      this.isb = true;
      this.isc = false;
    } else if(i == 0) {
      this.isa = false;
      this.isb = false;
      this.isc = true;
    }
  }
}
