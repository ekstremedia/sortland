import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
interface User {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private fb: FormBuilder, private router: Router, private data: DataService) { }
  user: FormGroup;
  brukernavn; feilmelding; passord: any;
  ngOnInit() {
    this.brukernavn = 'terje';
    this.passord = 'third';
    this.user = this.fb.group({
      brukernavn: [this.brukernavn, Validators.required],
      passord: [this.passord, Validators.required]
        // email: ['terjen@gmail.com', Validators.required],
        // password: ['third', Validators.required]
    });
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    // console.log(value);
    // this.signIn(value);
  //  this.signIn(value);
    this.tryAuth(value);
    console.log('LOGIN', value);
  }
  tryAuth(credentials) {
        // this.authService.octLogin(credentials);

    this.authService.octLogin(credentials).subscribe(result => {
      const svar = result.json();
      if (svar['error']) {
        this.feilmelding = null;
      this.data.log('error!', svar['error']);
      this.feilmelding = svar['error'];
      } else {
        // this.data.log('suksessfull innlogging',svar);
        this.feilmelding = null;
        this.authService.setUser(svar);
      }
      // console.log(result);
      // this.anim = true;
//       if (result.error) {
//         // this.invalidLogin = true;
//         // this.invalidLoginMsg = result.error;
//         // console.log(result);
//       } else {
//         // this.ldRef.MatDialogRef.close
//         // console.log(result);
//         // console.log(this.ldRef);
// // '        this.dialog.closeAll();
// //       this.invalidLogin = false;
// //       this.invalidLoginMsg = null;'
//       }
    });

  }
}
