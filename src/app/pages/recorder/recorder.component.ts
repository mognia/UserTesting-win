import { Component, OnInit } from '@angular/core';
import { IpcService } from "./../../services/ipc.service";
@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css']
})
export class RecorderComponent implements OnInit {

  constructor(private _ipc: IpcService) { }

  ngOnInit() {
  }
}
