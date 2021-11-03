import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { Address } from 'src/app/model/address.model';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm() {
    this.userForm = this.formBuilder.group({
      firstname: this.formBuilder.control("", [Validators.required, Validators.minLength(5), Validators.maxLength(255)]),
      lastname: this.formBuilder.control("", [Validators.required, Validators.minLength(5), Validators.maxLength(255)]),
      email: this.formBuilder.control("", [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(255)]),
      description: this.formBuilder.control("", [Validators.required, Validators.minLength(15), Validators.maxLength(255)]),
      dateBirth: this.formBuilder.control("", [Validators.required]),
      address: this.formBuilder.group({
        street: this.formBuilder.control("", [Validators.required]),
        state: this.formBuilder.control("", [Validators.required]),
        zip: this.formBuilder.control("", [Validators.required, Validators.pattern("^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$")]),
        city: this.formBuilder.control("", [Validators.required])
      })
    });
  }

  onSubmit(): void {
    const dataUser = this.userForm.value;
    const address = new Address(dataUser.street, dataUser.city, dataUser.state, dataUser.zip);

    const user = new User
    (
      dataUser.firstname,
      dataUser.lastname,
      dataUser.email,
      address,
      dataUser.description,
      dataUser.dateBirth
    );

    this.userService.addUser(user);
    this.router.navigate(["users"]);
  }

}
