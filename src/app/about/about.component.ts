import { Component, OnInit, Inject  } from '@angular/core';
import { Location} from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private urlpath:String = '';
  constructor(public location: Location) {
  }
  ngOnInit() {
    this.urlpath = this.location.path();
  }
}
