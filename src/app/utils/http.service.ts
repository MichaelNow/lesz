import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json;charset=UTF-8',
    })
};

  @Injectable({
    providedIn: 'root',
  })
  export class HttpService {
    constructor(private http: HttpClient) { }
    private baseUrl = "http://localhost:8082";
    get(url) {
        return this.http.get(this.baseUrl + url)
    }

    post(url: string, body){
        return this.http.post(this.baseUrl + url, body ,httpOptions);
    }


    // grabOnce(url){
    //     let params=new URLSearchParams();
    //     params.append("url",url);
    //     return this.http.post("http://localhost:8080/admin/grab", params.toString() ,httpOptions).subscribe(
    //         (val) => {
    //             console.log("POST call successful value returned in body", 
    //               val);
    //         },
    //         response => {
    //             console.log("POST call in error", response);
    //         },
    //         () => {
    //             console.log("The POST observable is now completed.");
    //         });
    // }

    // getKeys(resolve: Function) {
    //     return this.http.get("http://localhost:8082/img/keys").subscribe(
    //         (val) => {
    //             console.log("POST call successful value returned in body", val);
    //             resolve(val);
    //         },
    //         response => {
    //             console.log("POST call in error", response);
    //         },
    //         () => {
    //             console.log("The POST observable is now completed.");
    //         });
    // }
  }