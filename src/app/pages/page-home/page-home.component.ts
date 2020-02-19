import { CurrentProjects } from './../../data/currentProjects';
import { Project } from './../../models/project';
import { HomeComponent } from './../../components/home/home.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  projects: Project[];

  constructor() { }

  ngOnInit() {
    this.projects = new CurrentProjects().getProjects();
  }

}
