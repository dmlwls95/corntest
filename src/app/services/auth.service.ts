import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { apiurl } from './apiurl';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  adminSign(body){
    this.http.post(`${apiurl}/auth/adminlogin`, body, {})
    .subscribe(res =>{
      this.adminsetSession(res);
      this.navDashboard(res);
    })
  }
  
  navDashboard(val){
    if(val.success){
      this.router.navigate(['admin'])
    }
  }

  private adminsetSession(authResult){
    localStorage.setItem('admin_token', authResult.token)
  }

  private usersetSession(authResult){
    localStorage.setItem('user_token', authResult.token)
  }

  adminrmvSession(){
    localStorage.removeItem('admin_token');
    this.router.navigate([''])
  }
}
