import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CandInfoDataService {

  private candInfoData = new Subject<any>();
  private nextPrevData = new Subject<any>();
  constructor() { }
  getContactInfoData(): Observable<any> {
    return this.candInfoData.asObservable();
  }

  updateContactInfoData(message: any) {
    this.candInfoData.next(message);
  }

  getNextPrevData(): Observable<any> {
    return this.nextPrevData.asObservable();
  }

  updateNextPrevData(message: any) {
    this.nextPrevData.next(message);
  }
}
