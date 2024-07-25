import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  formData!: FormGroup;
  constructor(private fb: FormBuilder) {}
  countries = ['INDIA', 'USA'];
  cities: {
    [key: string]: string[];
  } = {
    INDIA: ['Delhi', 'Gurugaon', 'Noida', 'Banglore'],
    USA: ['Canada', 'New York', 'syney', 'silycon Valley'],
  };
  availableCity: string[] = [];
  ngOnInit() {
    this.formData = this.fb.group({
      userInfo: this.fb.group({
        name: ['', Validators.required],
        age: ['', Validators.required],
        role: ['', Validators.required],
      }),
      countryInfo: this.fb.group({
        country: [''],
        city: [''],
      }),
      numItem: [null, Validators.required],
      skills: this.fb.array([]), // ? Initialize an empty FormArray
    });

    console.log('getSkills', this.getSkills);

    this.formData.get('countryInfo.country')?.valueChanges.subscribe((data) => {
      console.log('data', data);
      this.availableCity = this.cities[data];
      this.formData.get('countryInfo.city')?.setValue('');
    });
  }

  get getSkills() {
    return this.formData.get('skills') as FormArray;
  }

  addSkills() {
    // const item = this.fb.group({
    //   name: [null, Validators.required],
    // });
    const newSkill = this.fb.control('', Validators.required);
    // ? Add the new form control to the FormArray
    this.getSkills.push(newSkill);
    console.log('getSkills after addSkills', this.getSkills);
  }

  save() {
    console.log('save', this.formData.value);
  }

  addNumSkills() {
    const num = this.formData.get('numItem')?.value;
    console.log('num', num);
    for (let i = 0; i < num; i++) {
      this.addSkills();
    }
  }

  deleteSkill(i: number) {
    this.getSkills.removeAt(i);
  }
}
