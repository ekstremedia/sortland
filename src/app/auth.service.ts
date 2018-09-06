import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  prefix = '';
  currentUser:  any;
  curfindout: any;

  constructor(private http: Http) {
    if (environment.production === false) {
      this.prefixSet('http://localhost:81/sortland/');
    }
      // this.getuser(this.curfindout).subscribe(response => {
      //   if (response.first_name===undefined) {
      //     // this.logout();
      //   } else {
      //     this.currentUser = response;
      //   }
      // });
      this.getuser(this.curfindout).subscribe(response => {
        const res = response.json();
        if (res['first_name']===undefined) {
          // this.logout();
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
      // catchError(this.handleError('addHero', hero))
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
    // console.log(credentials);
    // return this.http.post(this.prefix+'api/checkLogin', credentials)
    //  .map(response => {
    //    const result = response.json();
    //    if (result) {
    //     //  localStorage.setItem('JIUzI1NiIsInR5cCI6IkpXV', result.token);
    //     //  let jwt = new JwtHelper();
    //     //  this.currentUser = result.user;
    //     // console.log('result',result);
    //     if (result.id)  { this.currentUser = result; }
    //      return result;
    //    }
    //   //  console.log('false');
    //    return false;
    //  });

    return this.http.post(this.prefix+'api/checkLogin', credentials)
    .pipe(
      data => data
      // catchError(this.handleError('addHero', hero))
    );

   }
   setUser(user) {
     this.currentUser = user;
   }
   getuser(uid) {
    // const body = {id: uid};
    // console.log('checkuser',uid);
    return this.http.post(this.prefix+'api/checkUser','')
    .pipe(
      data => data
    );
  }

}
