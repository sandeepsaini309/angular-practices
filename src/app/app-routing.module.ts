import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudEmployeesComponent } from './components/crud-employees/crud-employees.component';
import { SignalsComponent } from './components/signals/signals.component';
import { TaskComponent } from './components/task/task.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { HtmlCssComponent } from './components/html-css/html-css.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TableListComponent } from './components/table-list/table-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signals',
  },
  {
    path: 'crud',
    component: CrudEmployeesComponent,
  },
  {
    path: 'signals',
    component: SignalsComponent,
  },
  // {
  //   path: 'signals',
  //   loadChildren: () =>
  //     import('./components/signals/signals.module').then(
  //       (m) => m.SignalsModule
  //     ),
  // },
  {
    path: 'task',
    component: TaskComponent,
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
  },
  {
    path: 'html',
    component: HtmlCssComponent,
  },
  {
    path: 'form',
    component: DynamicFormComponent,
  },
  {
    path: 'table-list',
    component: TableListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
