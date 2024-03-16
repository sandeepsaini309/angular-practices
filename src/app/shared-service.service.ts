import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  constructor() {}

  openAlert(msg: string) {
    alert(msg);
  }
}
