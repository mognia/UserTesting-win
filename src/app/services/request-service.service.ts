import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  selectedDetail = new EventEmitter<any>();
  selectedReqID;
  constructor(
    private http: HttpClient,
    ) { }

    getRequests() {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/getTestRequests', { headers: headers });
    }
    showDetails(reqID) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/showDetails', reqID, { headers: headers });
    }
    getQualification(reqID){
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/getQualification', reqID, { headers: headers });
    }
    removeThisTest(reqID){
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/removeThisTest', reqID, { headers: headers });
    }
    getHints(reqID) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/getHints', reqID, { headers: headers });
    }
    setReqDetail(data){
      this.selectedReqID = data.reqID;
    }
    getReqDetail(){
      return this.selectedReqID;
    }
}
