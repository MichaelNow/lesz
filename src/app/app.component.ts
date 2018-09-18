import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService) { }
  model = {
    left: true,
    middle: false,
    right: false
  };

  prefix:string = "https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=";
  middle:string = "&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&word=";
  suffix:string = "&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=&fr=&cg=wallpaper&pn=3&rn=60&gsm=3c&1528186910254=";
  srcFilter:string = "高清";
  clickMessage = 'orgm';
  keys:any;
  getKeys() {
    this.appService.getKeys((val) => {
      this.keys = val;
      // this.keys.array.forEach(element => {
      //   this.appService.getImages();
      // });
    });
  }
  onClickMe() {
    let url:string = this.prefix + encodeURI(this.srcFilter) + this.middle + encodeURI(this.srcFilter) + this.suffix;
    this.appService.grabOnce(encodeURIComponent(url));
  }
}
