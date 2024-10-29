declare var google:any;
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private router= inject (Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:'278751926475-0vhr0iilmtkg592mdambo6l7o5jsnkhe.apps.googleusercontent.com',
      callback:(resp:any)=>{this.handleLogin(resp);
        // console.log(resp);
      }
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme: 'filled_blue',
      size: 'large',
      shape: 'ractangle',
      width: 250
    })
   
  }

  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response:any){
    if(response){
      //decode the token
      const payload = this.decodeToken(response.credential);
      //store in session
      sessionStorage.setItem("loggedInUser",JSON.stringify(payload));
      //navigate to home/browse
      this.router.navigate(['browse'])
    }

  }

}
