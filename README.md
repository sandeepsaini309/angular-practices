<!-- # AngularPractices

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->

<form [formGroup]="myForm" (ngSubmit)="save()">
    <div>
        <label>name</label>
        <input type="text" formControlName="name">
    </div>
    <div>
        <label>pass</label>
        <input type="text" formControlName="pass">
    </div>

    <button [disabled]="!myForm.valid">save</button>
    <button (click)="patch()">patch</button>
    <button (click)="clear()">clear</button>

</form>

<!-- TS -->

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

constructor(private fb: FormBuilder) {}

myForm: FormGroup = this.fb.group({
name: ['', [Validators.required, Validators.minLength(5)]],
pass: ['', Validators.required],
FormGroup: {
}
});

save() {
let value = this.myForm.value;
console.log(value.name);
console.log(value.pass);
}

patch() {
this.myForm.patchValue({
name: 'sandeep',
pass: '1234567',
});
}
clear() {
this.myForm.reset();
}
