import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IpcService } from './../../services/ipc.service';
import { RequestService } from '../../services/request-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  qualificationForm: FormGroup;
  constructor(
    private  _ipc: IpcService,
    private reqService: RequestService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.reqService.getQualification({recID : this.requestDetail.reqID}).subscribe(res => {
      this.questionData = res;
      this.questionOptions = this.questionData.options;
    });
    this.qualificationForm = this.fb.group({
      options : []
    });
  }
  openRecorder() {
    console.log(this.qualificationForm.get('options').value);
    this._ipc.send('OpenRec');
  }

}
