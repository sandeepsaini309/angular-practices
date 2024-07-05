import { Component, ViewChild } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-html-css',
  templateUrl: './html-css.component.html',
  styleUrls: ['./html-css.component.scss'],
})
export class HtmlCssComponent {
  @ViewChild('task') taskM!: TaskComponent;

  ngAfterViewInit() {
    console.log('this.taskM.list1', this.taskM.list1);
  }
}
