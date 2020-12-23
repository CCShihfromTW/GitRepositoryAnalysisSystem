import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-choose-project',
  templateUrl: './choose-project.component.html',
  styleUrls: ['./choose-project.component.css']
})
export class ChooseProjectComponent implements OnInit {
  imgURL = 'https://assets.juksy.com/files/articles/53296/800x_100_w-5720399b28484.jpg';
  name = 'John Cena';
  shortName = 'J C';
  conpany = 'WWE';
  jobTitle = 'Wrestler';
  location = 'USA';
  selfIntroduction = 'ARE YOU SURE ABOUT THAT?';
  projectNames = ['WWE2020', 'WWE2019', 'WWE2018'];
  projectIntroduction = '專案內容敘述';





  constructor(private router: Router) { }

  ngOnInit(): void {
    // if (window.location.hash === '#readMore') {
    //   window.location.assign('abc');
    // }
  }

  // tslint:disable-next-line:typedef
  choose_repo() {
    this.router.navigateByUrl('choose-repository');
  }
}
