import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  prefix = '';
  currentUser:  any;

  constructor(private http: Http) {
    if (environment.production === false) {
      this.prefixSet('http://localhost:81/sortland/');
    }
      this.getuser().subscribe(response => {
        const res = response.json();
        if (res['first_name']===undefined) {
        } else {
          this.currentUser = res;
        }
      });
  }
  logout() {
    this.currentUser = null;

    const logout = this.http.post(this.prefix+'api/logOut', '')
    .pipe(
      data => data
    );
    logout.subscribe();
  }
  isLoggedIn() {
    if (this.currentUser) { return true; }
  }
  public prefixSet(string) {
    this.prefix = string;
  }
  octLogin(credentials) {
    return this.http.post(this.prefix+'api/checkLogin', credentials)
    .pipe(
      data => data
    );

   }
   setUser(user) {
     this.currentUser = user;
   }
   getuser() {
    return this.http.post(this.prefix+'api/checkUser','')
    .pipe(
      data => data
    );
  }

}
