import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as querystring from 'querystring';

@Injectable()
export class JsonReqsService {
  PORT = 4000;
  constructor(private $http: HttpClient) {
  }
  getInitials(mainPage){
    console.log('run..',mainPage);
    console.log(`http://localhost:${this.PORT}/api/${mainPage}/initial`);
    return this.$http.get(`http://localhost:${this.PORT}/api/${mainPage}/initial`);
  }
  booksHttpReq(params={}) {

    let query = querystring.stringify(params);
    /*const keys = Object.keys(params);
    console.log('keys:',keys);
    if(keys && keys.length) {
        for (let x = 0; x < keys.length; x++) {
          query += `${keys[x]}=${params[keys[x]]}`;
          if (keys[x] !== keys[keys.length - 1] && keys.length > 1) query += '&';
        }
      }*/
      console.log('queryS:',query);
      console.log('query:',`http://localhost:4000/api/items/?${query}`);
    return this.$http.get(`http://localhost:${this.PORT}/api/items/?${query}`);
  }
  booksHttpReqAll() {
    return this.$http.get(`http://localhost:${this.PORT}/api/items/all`);
  }
  getAuthorsDet() {
      return this.$http.get('assets/json/authors.json');
  }
}
