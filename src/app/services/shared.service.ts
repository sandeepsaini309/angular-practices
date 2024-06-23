import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  private broadcastMsg$ = new BehaviorSubject<string>('hello...');

  getMsg(): Observable<string> {
    return this.broadcastMsg$.asObservable();
  }

  updateMsg(value: any) {
    this.broadcastMsg$.next(value || 'hello world...');
  }

  openAlert(msg: string) {
    alert(msg);
  }
}
