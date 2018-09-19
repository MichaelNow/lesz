import { Component, OnInit, Inject  } from '@angular/core';
import { Location} from '@angular/common';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  private urlpath:String = '';
  constructor(public location: Location) {
  }
  ngOnInit() {
    this.urlpath = this.location.path();
  }
}
