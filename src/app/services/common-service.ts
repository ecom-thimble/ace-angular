import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CommmonService {
  public getdata: any = null;
  //private messageSource = new BehaviorSubject<string>();

  //currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    //this.messageSource.next(message);
  }
}
