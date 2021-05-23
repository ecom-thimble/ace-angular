import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

export interface StepType {
  label: string;
  fields: any[];
}

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent {
  form_data = {
    name: '23',
    age: 12,
    address: '',
    description: ''
  }

  step_form = [
    {
      title: 'step 1',
      data: {
        name: this.form_data.name,
        age: this.form_data.age
      }
    },
    {
      title: 'step 2',
      data: {
        address: this.form_data.address
      }
    },
    {
      title: 'step 3',
      data: {
        description: this.form_data.description
      }
    }
  ]

  start_step = 1

  setFormData(form_data) {
    this.form_data = {
      ...this.form_data,
      ...form_data
    }
    console.log('next',this.form_data)
  }
  finishAction(data:any){
    console.log(this.form_data)
  }
}

