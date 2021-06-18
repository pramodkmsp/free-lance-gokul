import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message = '';
  flagsCheck = false;
  managerTitle = '';
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onsubmit() {
    this.flagsCheck = true;
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;

    if (
      (username === 'george' && password === '123') ||
      (username === 'mardianto' && password === '123') ||
      (username === 'joe' && password === '123')
    ) {
      this.message = 'login success';
      // window.location.reload()
      this.router.navigateByUrl('/home');
      if (username == 'george') {
        this.managerTitle = 'General Manager';
      } else if (username == 'mardianto') {
        this.managerTitle = 'District Manager';
      } else if (username == 'joe') {
        this.managerTitle = 'Store Manager';
      }

      localStorage.setItem('manager_name', username);
      localStorage.setItem('manager_title', this.managerTitle);
    } else {
      this.message = 'Username or password is incorrect';
    }
  }
}
