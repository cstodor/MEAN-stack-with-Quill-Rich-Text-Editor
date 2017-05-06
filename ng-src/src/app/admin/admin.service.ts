import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AdminService {

  sections: any[];

  constructor(private http: Http) { }

  // Get Single Section By ID
  getAllSections(): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:4000/v1/sections/', { headers: headers })
      .map(res => res.json())
      .do(data => console.log('Section By ID: ' + JSON.stringify(data)));
  }

  // Get Single Section By ID
  getSectionById(id: String): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:4000/v1/sections/section/' + id, { headers: headers })
      .map(res => res.json())
      .do(data => console.log('Section By ID: ' + JSON.stringify(data)));
  }

  // Update Existing Section
  updateSection(id: String, result): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:4000/v1/sections/section/' + id, result, { headers: headers })
      .map(res => res.json())
      .do(data => console.log('Section By ID: ' + JSON.stringify(data)));
  }

}
