import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { TokenPayload } from '../../modelli/Token';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  login(email: string, password: string) {
    const payload: TokenPayload = {
      email: email,
      password
    };
    this.authService.login(payload)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
