import { Component } from '@angular/core';
// interface optional {
//   name: string;
//   value: boolean;
// }
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  data =
    'i love my india i love my india i love my india i love my india i love my india i love my india i love my india ';
  list1 = [
    {
      name: '1',
      value: false,
    },
    {
      name: '2',
      value: false,
    },
    {
      name: '3',
      value: false,
    },
    {
      name: '4',
      value: false,
    },
    {
      name: '5',
      value: false,
    },
  ];

  // list2: optional[] = [];

  changeStatus(index: number, direction: string) {
    console.log('1', index);
    if (direction === 'toRight') {
      this.list1[index].value = true;
    } else {
      this.list1[index].value = false;
    }
  }
}
