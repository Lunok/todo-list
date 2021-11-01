import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm() {
    this.userForm = this.formBuilder.group({
      firstname: this.formBuilder.control(""),
      lastname: this.formBuilder.control(""),
      email: this.formBuilder.control(""),
      description: this.formBuilder.control(""),
      dateBirth: this.formBuilder.control(""),
      address: this.formBuilder.group({
        street: this.formBuilder.control(""),
        state: this.formBuilder.control(""),
        zip: this.formBuilder.control(""),
        city: this.formBuilder.control("")
      })
    });
  }

  onSubmit(): void {
    console.log(this.userForm.value);
  }

}
