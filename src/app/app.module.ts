import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudEmployeesComponent } from './components/crud-employees/crud-employees.component';
import { ColorChangeDirective } from './directives/color-change.directive';
import { TaskComponent } from './components/task/task.component';
import { ColorChangePipe } from './pipes/color-change.pipe';
import { SignalsComponent } from './components/signals/signals.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { NavComponent } from './components/nav/nav.component';
import { HtmlCssComponent } from './components/html-css/html-css.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TableListComponent } from './components/table-list/table-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudEmployeesComponent,
    ColorChangeDirective,
    TaskComponent,
    ColorChangePipe,
    SignalsComponent,
    RxjsComponent,
    NavComponent,
    HtmlCssComponent,
    DynamicFormComponent,
    TableListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
