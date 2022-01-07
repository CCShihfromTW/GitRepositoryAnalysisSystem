import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
/*
*  httpclient to change name
* */
@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

  constructor(private httpClient: HttpClient) { }

  public setUserName(body){
    const headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
    const options = {
      headers
    };
    return this.httpClient.put<any>('/GitRepositoryAnalysisSystem/userProfile', body, options);
  }
}
