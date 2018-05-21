import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class ApplicationService {
  public domain = "http://localhost:8080/";
  public route;

  constructor(
    private http: HttpClient
  ) { }
  // Function to get all user events from the database
  public getApplicationEvents(language) {
    this.route= "5afd55ff2dfca6221a3d6a3e" +'/';
    return this.http.get<any>(this.domain + 'application/getApplicationEvents/'+this.route+language);
  }
}