import { CurrentProjects } from './../../data/currentProjects';
import { Project } from './../../models/project';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-project',
  templateUrl: './page-project.component.html',
  styleUrls: ['./page-project.component.scss']
})
export class PageProjectComponent implements OnInit {

  project: Project;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.project = this.getProject();
  }

  private getProject(): Project {
    const projectURL = this.route.snapshot.paramMap.get('id');
    let returnProject: Project;
    new CurrentProjects().getProjects().forEach(project => {
      if (project.URL === projectURL) {
        returnProject = project;
      }
    });
    return returnProject;
  }


}
