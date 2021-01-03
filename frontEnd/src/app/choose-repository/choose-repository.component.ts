import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {GetRepoInfoOfChosenProjectService} from './get-repo-info-of-chosen-project.service';

@Component({
  selector: 'app-choose-repository',
  templateUrl: './choose-repository.component.html',
  styleUrls: ['./choose-repository.component.css']
})
export class ChooseRepositoryComponent implements OnInit {
  ProjectID = '';
  datas: any;
  owner = new Array();
  repoNames = new Array();
  constructor(private router: Router, private getrepoinfoofchosenproject: GetRepoInfoOfChosenProjectService,private activerouter:ActivatedRoute) {
  }

  ngOnInit(): void {


     this.activerouter.queryParams.subscribe( (Inputvalue:any) => {
      this.ProjectID  = Inputvalue['ChosenProjectID'].toString();
      console.log(this.ProjectID);
      });
      this.getTotalRepoInfoOfProject();

  }
   getTotalRepoInfoOfProject() {
        const UserRepoData = {
          projectId:undefined,
        };
        UserRepoData.projectId  = this.ProjectID;
        const data = JSON.stringify(UserRepoData);
        this.getrepoinfoofchosenproject.getRepoDataOfProject(data).subscribe(
          request => {
            this.datas = request;
            console.log(this.datas);
            for(let item of this.datas){
              this.repoNames.push(item.repoName);
              this.owner.push(item.ownerName);
            }
          }
        );
    }



  // tslint:disable-next-line:typedef
  goToAnalysisPage(event) {
    const chosenRepoName: string = event.target.id.toString();
    const chosenRepoIndex = this.repoNames.findIndex((element) => (element) == chosenRepoName);
    this.router.navigate(['analysis'], {queryParams: {owner: this.owner[chosenRepoIndex], repoName: chosenRepoName}});
  }

  // tslint:disable-next-line:typedef
  goToAddRepoPage() {
    this.router.navigateByUrl('add-repo');
  }
}
