import { Component } from '@angular/core';
interface optional {
  name: string;
  value: boolean;
}
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

  list2: optional[] = [];

  changeStatus(index: number, direction: string) {
    console.log('index', index);
    console.log('list1', this.list1);
    if (direction === 'checked') {
      this.list1[index].value = true;
    } else {
      this.list1[index].value = false;
    }

    // if (direction === 'checked') {
    //   const matchedItem = this.list1.findIndex(
    //     (el) => (el.name = this.list1[index].name)
    //   );
    //   console.log('matchedItem', matchedItem);
    // }
  }

  popItem() {
    this.list1.pop();
  }
}
