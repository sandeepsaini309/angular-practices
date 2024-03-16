import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { SharedServiceService } from './shared-service.service';
import { ajax } from 'rxjs/ajax';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-practices';
  // @ViewChild('myBox') box!: ElementRef;
  @ViewChildren('myBox') box!: QueryList<any>;
  // private myObs: Subscription;
  constructor(
    private sharedService: SharedServiceService,
    private http: HttpClient
  ) {
    // const myObsData = new Observable((sub) => {
    //   sub.next(10);
    //   sub.next('gsuasgbds');
    //   sub.next({ name: 'sa' });
    // });
    // this.myObs = myObsData.subscribe((res) => {
    //   console.log('res', res);
    // });
    // this.myObs.unsubscribe();
    // sharedService.openAlert('hello form app component');
    // const sub = new Subject();
    // sub.subscribe((res) => {
    //   console.log('subcribe1', res);
    // });
    // sub.next(1);
    // sub.next(2);
    // sub.subscribe((res) => {
    //   console.log('subcribe2', res);
    // });
    // sub.next(3);
    // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa');
    // const bSub = new BehaviorSubject(0);
    // bSub.subscribe((res) => {
    //   console.log('sub1', res);
    // });
    // bSub.next(1);
    // bSub.next(2);
    // bSub.subscribe((res) => {
    //   console.log('sub2', res);
    // });
    // bSub.next(3);
    // Observables are Unicast
    // const obs = new Observable((sub) => sub.next(Math.random()));
    // // subscriber1
    // obs.subscribe((res) => console.log('sub1', res)); // sub1 0.38732083557518493
    // // subscriber2
    // obs.subscribe((res) => console.log('sub2', res)); // sub2 0.44627429538225005
    // Observables are Multicast
    // const subj = new Subject();
    // // subj.next(Math.random());
    // // subscriber1
    // subj.subscribe((res) => console.log('subJ1', res));
    // // subscriber2
    // subj.subscribe((res) => console.log('subJ2', res));
    // subj.next(Math.random());

    const mySubject = new Subject();
    const data = this.http.get('https://jsonplaceholder.typicode.com/users');
    // data.subscribe((sub) => {
    //   console.log('res1', sub);
    // });
    // data.subscribe((sub) => {
    //   console.log('res2', sub);
    // });
    mySubject.subscribe((sub) => {
      console.log('res1', sub);
    });
    mySubject.subscribe((sub) => {
      console.log('res2', sub);
    });
    const result = data.subscribe(mySubject);
  }

  // ngOnInit() {}
  // ngAfterViewInit() {
  //   console.log('div', this.box);
  //   // this.box.nativeElement.style.color = 'yellow';
  //   // this.box.first.nativeElement.style.color = 'yellow';
  //   // this.box.last.nativeElement.style.color = 'yellow';
  //   // this.box.forEach((el) => {
  //   //   el.nativeElement.style.color = 'yellow';
  //   // });
  // }
}
