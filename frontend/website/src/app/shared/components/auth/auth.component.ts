import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private readonly userServices: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userServices.loginUser(this.loginForm.value).subscribe((res) => {
        if (!res) {
          alert('El usuario y/o password son incorrectos');
        } else {
            this.router.navigate(['/products']);
        }
    });
  }

}
