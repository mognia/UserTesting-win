import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestService } from '../../services/request-service.service';
@Component({
  selector: 'app-req-list',
  templateUrl: './req-list.component.html',
  styleUrls: ['./req-list.component.css']
})
export class ReqListComponent implements OnInit {
  reqList;
  constructor(
    private reqService: RequestService
  ) { }
  @Output() reqSelected = new EventEmitter<any>();

  ngOnInit() {
    this.reqService.getRequests().subscribe(res =>{
    this.reqList = res;  
    });
  }
  choseReq(reqID){
    this.reqService.showDetails({reqID: reqID}).subscribe(res =>{

     this.reqService.selectedDetail.emit(res);
    });
  }


}
