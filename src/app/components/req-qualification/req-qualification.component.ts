import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IpcService } from './../../services/ipc.service';
import { RequestService } from '../../services/request-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-req-qualification',
  templateUrl: './req-qualification.component.html',
  styleUrls: ['./req-qualification.component.css']
})
export class ReqQualificationComponent implements OnInit {
  @Input() requestDetail;
  @Output() declinedQual = new EventEmitter<any>();
  @Output() acceptQual = new EventEmitter<any>();

  questionData;
  questionText;
  questionOptions;
  selectedQuestion;
  notQuali = false;
  qualificationForm: FormGroup;
  constructor(
    private  _ipc: IpcService,
    private reqService: RequestService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.reqService.getQualification({reqID : this.requestDetail.reqID}).subscribe(res => {
      this.questionData = res;
      this.questionOptions = this.questionData.options;
    });
    this.qualificationForm = this.fb.group({
      options : []
    });
  }
  openRecorder() {
   // console.log(this.qualificationForm.get('options').value);
    this.selectedQuestion = this.qualificationForm.get('options').value;
    if (this.selectedQuestion != this.questionData.rightAnswer) {
      this.reqService.removeThisTest({reqID : this.requestDetail.reqID}).subscribe(res =>{
      });
      this.notQuali = true;
      setInterval(function() {
        window.location.reload();
      }, 4000);
    } else {
      this.reqService.setReqDetail(this.requestDetail);
      this.router.navigate(['/rec'])
      this._ipc.send('OpenRec');
    }
  }

}
