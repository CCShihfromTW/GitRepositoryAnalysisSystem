import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {
  password = null; //binding頁面的[(ngModel)]="password"
  passwordInput: any; //binding頁面的[(ngModel)]="password_check"
  isFail: boolean = false; //是否變更失敗
  warnMessage: string = '確認密碼錯誤，請重新輸入'; //變更失敗的錯誤訊息
  UserID = "";
  result: any;

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.UserID = window.sessionStorage.getItem('UserID');
    console.log("session_UserID", this.UserID);
  }

  redirectTo(url) {
    this.router.navigateByUrl(url.toString());
  }


  checkPassword() {
    if (this.password === this.passwordInput && this.password != null) {
      const UserData = {
        UserID: this.UserID,
        password: this.passwordInput
      };
      const data = JSON.stringify(UserData);
      const headers = new HttpHeaders({
        'Content-Type': 'text/json'
      });
      const options = {
        headers
      };

      this.httpClient.post<any>('/GitRepositoryAnalysisSystem/', data, options).subscribe(
        request => {
          this.result = request;
          if (this.result.isSuccess == "true") {
            alert("修改成功! 轉至個資頁面");
          } else {
            alert("修改失敗");
          }
        }
      );
      this.redirectTo("myprofile");
    }

    else {
      this.isFail = true;
      this.password = null;
      this.passwordInput = null;
    }

  }

}
