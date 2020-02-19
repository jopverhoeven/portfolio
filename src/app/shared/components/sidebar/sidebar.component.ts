import { CurrentProjects } from './../../../data/currentProjects';
import { Project } from './../../../models/project';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();


  projects: Project[];

  constructor() { }

  ngOnInit() {
    this.projects = new CurrentProjects().getProjects();
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

}
