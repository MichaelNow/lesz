import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   selectIndex:String  = '';
  //  constructor(@Inject(ActivatedRoute) private router: ActivatedRoute) { }

  enterModule(index) {
    this.selectIndex = index;
  }

  constructor(public location: Location) {
  }

  ngOnInit() {
    // this.router.params.subscribe((params: Params) => {
    //     params 
    // });
    this.selectIndex = this.location.path();
    if(!this.selectIndex.includes("service")  && !this.selectIndex.includes("about") && !this.selectIndex.includes("case")) {
      this.selectIndex = "/home";
    }
    // this.selectIndex = this.location.path();
}
}
