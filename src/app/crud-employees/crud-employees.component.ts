import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-employees',
  templateUrl: './crud-employees.component.html',
  styleUrls: ['./crud-employees.component.scss'],
})
export class CrudEmployeesComponent {
  public isEdit: boolean = false;
  private currentIndex: any = null;
  public employeeData: any[] = [
    {
      firstName: 'sandeep',
      secondName: 'saini',
      email: 'test@gmail.com',
      mobile: '123456789',
      address: 'new delhi',
      city: 'delhi',
      pinCode: '110011',
    },
  ];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.getEmployeeData();
  }

  employeeFrom: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    secondName: [''], // second name is optional
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    pinCode: ['', [Validators.required, Validators.minLength(4)]],
  });

  getEmployeeData() {
    try {
      const data = localStorage.getItem('employeeData');
      this.employeeData = data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('getEmployeeData error:', e);
    }
  }

  addEmployee() {
    try {
      const value = this.employeeFrom.value;
      if (this.isEdit) {
        this.employeeData[this.currentIndex] = value;
      } else {
        this.employeeData.push(value);
      }
      this.clear();
      this.saveDataLocalStorage(this.employeeData);
      this.getEmployeeData();
    } catch (e) {
      console.error('addEmployee error:', e);
    }
  }

  clear() {
    this.isEdit = false;
    this.employeeFrom.reset();
  }

  saveDataLocalStorage(data: any) {
    localStorage.setItem('employeeData', JSON.stringify(data));
  }

  editEmployee(index: number) {
    try {
      this.isEdit = true;
      this.currentIndex = index;
      const matchedEmployee = this.employeeData[index];
      this.employeeFrom.setValue({
        firstName: matchedEmployee.firstName,
        secondName: matchedEmployee.secondName,
        email: matchedEmployee.email,
        mobile: matchedEmployee.mobile,
        address: matchedEmployee.address,
        city: matchedEmployee.city,
        pinCode: matchedEmployee.pinCode,
      });
    } catch (e) {
      console.error('editEmployee error:', e);
    }
  }

  deleteEmployee(index: number) {
    try {
      if (this.isEdit) {
        this.employeeFrom.reset();
      }
      this.isEdit = false;
      this.employeeData.splice(index, 1);
      this.saveDataLocalStorage(this.employeeData);
    } catch (e) {
      console.error('deleteEmployee error:', e);
    }
  }
}
