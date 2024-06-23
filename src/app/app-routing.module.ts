import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudEmployeesComponent } from './components/crud-employees/crud-employees.component';
import { SignalsComponent } from './components/signals/signals.component';
import { TaskComponent } from './components/task/task.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
