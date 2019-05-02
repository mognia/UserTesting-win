import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChunkHandelerService {
  Chunck$: Observable<any>;
  private ChunkSubject = new Subject<any>();
  savedChunk;
  constructor() { 
    this.Chunck$ = this.ChunkSubject.asObservable();
  }
  getChunk(c){
    this.savedChunk = c
    
    this.ChunkSubject.next(c)
  }
  sendChunk(){
    console.log(`from service ${this.savedChunk}`);
    return this.savedChunk
  }
}
