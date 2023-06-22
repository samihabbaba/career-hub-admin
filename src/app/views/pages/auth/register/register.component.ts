import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onRegister(e: Event) {
    e.preventDefault();
    const obj = {
      username: this.username,
      password: this.password,
      telephone: '',
      role: 'admin'
    }
    this.http.post(`${environment.apiUrl}user`, obj).subscribe((resp) => {
      console.log(resp)

      this.router.navigate(['/auth/login']);
    })

    // localStorage.setItem('isLoggedin', 'true');

    // if (localStorage.getItem('isLoggedin')) {
    // }
  }

}
