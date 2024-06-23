import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent {
  constructor(private sharedService: SharedService, private http: HttpClient) {}

  ngOnInit() {
    // this.observablesExample();
    this.msgSubExample();
    this.GenericFn<string>('sandeep');
  }

  msgSub!: Subscription;
  msgSubExample() {
    this.msgSub = this.sharedService.getMsg().subscribe((res) => {
      console.log('msgSub res', res);
    });

    setTimeout(() => {
      this.sharedService.updateMsg('hi...');
    }, 3000);
  }

  private observableSub1!: Subscription;
  observablesExample() {
    // ! Observable Example
    const myObsData = new Observable((sub) => {
      sub.next(10);
      sub.next('gsuasgbds');
      sub.next({ name: 'sa' });
    });
    this.observableSub1 = myObsData.subscribe((res) => {
      console.log('res', res);
    });
    this.observableSub1.unsubscribe();

    // ! Subject Example
    const sub = new Subject();
    sub.subscribe((res) => {
      console.log('subcribe1', res);
    });
    sub.next(1);
    sub.next(2);
    sub.subscribe((res) => {
      console.log('subcribe2', res);
    });
    sub.next(3);

    // ! BehaviorSubject Example
    const bSub = new BehaviorSubject(0);
    bSub.subscribe((res) => {
      console.log('sub1', res);
    });
    bSub.next(1);
    bSub.next(2);
    bSub.subscribe((res) => {
      console.log('sub2', res);
    });
    bSub.next(3);

    // ! Observables are Unicast Example
    const obs = new Observable((sub) => sub.next(Math.random()));
    // subscriber1
    obs.subscribe((res) => console.log('sub1', res)); // sub1 0.38732083557518493
    // subscriber2
    obs.subscribe((res) => console.log('sub2', res)); // sub2 0.44627429538225005
    obs;

    // ! Subject are Multicast Example
    const subj = new Subject();
    // subj.next(Math.random());
    // subscriber1
    subj.subscribe((res) => console.log('subJ1', res));
    // subscriber2
    subj.subscribe((res) => console.log('subJ2', res));
    subj.next(Math.random());

    // ! Observable Unicast to Multicast Example
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

  GenericFn<T>(arg: T) {
    // ? Generic function witch can work with any data type that define during calls
    console.log('GenericFn argument:', arg);
    console.log('GenericFn argument typeof:', typeof arg);
  }

  ngOnDestroy() {
    this.msgSub.unsubscribe();
  }
}
