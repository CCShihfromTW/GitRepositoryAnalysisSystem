import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MyprofileService} from  "./myprofile.service";

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  UserName="";
  constructor(private router: Router, private profileService :MyprofileService) { }

  ngOnInit(): void {
    this.UserName = window.sessionStorage.getItem('Username');
  }
  redirectTo(url){
    this.router.navigateByUrl(url.toString());
  }
  NavitoResetPassword(){
    this.redirectTo("reset-password");
  }
}
