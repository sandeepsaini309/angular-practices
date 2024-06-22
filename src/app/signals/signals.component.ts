import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent {
  // counter: number = 0;
  // message: string[] = [];

  // ngOnChanges() {
  //   console.log('ngOnChanges runs');
  // }

  // ngDoCheck() {
  //   console.log('Change Detection runs');
  // }

  // increment() {
  //   this.counter++;
  // }

  // decrement() {
  //   this.counter--;
  // }

  // !! Implementing signals version

  counterValue = signal<number>(0); //? This signal knows as writable signal, Because here we can update the value of signal
  message = signal<string[]>([]);
  doubleCounterValue = computed(() => this.counterValue() * 2); // ? Compute value form respective writable signal, whenever the signal value changes its compute new value.

  constructor() {
    effect(() => {
      // ? whenever we want to execute some code when the value of a signal changes.
      // console.log('The current counter value is:', this.counterValue());
      console.log('The current counter value is:');
    });
  }

  ngOnChanges() {
    console.log('ngOnChanges runs');
  }

  ngDoCheck() {
    console.log('Change Detection runs');
  }

  increment() {
    // this.counterValue.set(2);

    // this.counterValue.set(this.counterValue() + 1); // ? setting the new value based on previous value, witch is not good set should be use for only new values.

    this.counterValue.update((prevValue) => prevValue + 1); // ? update() is used for immutable dataTypes or primitives eg: string, numbers, boolean

    // this.message.update((prevMsg) => [
    //   ...prevMsg,
    //   'Current value of counter: ' + this.counterValue(),
    // ]); // ? approach is working but not good as, its creating new array each times when we click on button

    this.message.mutate((prevMsg) =>
      prevMsg.push('Current value of counter: ' + this.counterValue())
    );
  }

  decrement() {
    // this.counterValue;
    this.counterValue.update((prevValue) => prevValue - 1);

    this.message.mutate((prevMsg) => prevMsg.pop());
  }
}
