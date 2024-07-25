import { Component } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent {
  data: any[] = [];
  dataHeadings: string[] = [];

  async ngOnInit() {
    this.data = await this.getUsersData();
    console.log('data', this.data);

    this.dataHeadings = Object.keys(this.data[0]);
    console.log('head', this.dataHeadings);
  }

  async getUsersData() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.log('e', e);
      return null;
    }
  }

  showSortBtn(item: string): boolean {
    try {
      return !['address', 'company'].includes(item);
    } catch (e) {
      console.log('showSortBtn error:', e);
      return false;
    }
  }

  sortItems(index: number) {
    try {
      const key = this.dataHeadings[index];
      console.log('key', key);
      const sortedData = this.data.sort((a, b): any => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
      console.log('sortedData', sortedData);
    } catch (e) {
      console.log('sortItems error:', e);
    }
  }
}
