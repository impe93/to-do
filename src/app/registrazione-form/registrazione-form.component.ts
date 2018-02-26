import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenPayload, TokenResponse } from '../../modelli/Token';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registrazione-form',
  templateUrl: './registrazione-form.component.html',
  styleUrls: ['./registrazione-form.component.css']
})
export class RegistrazioneFormComponent implements OnInit {

  name = '';
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  registrati(name: string, email: string, password: string, confermaPassword: string) {
    if (name !== '' && email !== '' && password !== '' && confermaPassword !== '' && password === confermaPassword) {
      const token: TokenPayload = {
        email: email,
        password: password,
        name: name
      };
      this.auth.registrazione(token)
        .subscribe((tokenResponse: TokenResponse) => {
          if (tokenResponse) {
            this.router.navigate(['/']);
          }
        });
    }
  }

}
