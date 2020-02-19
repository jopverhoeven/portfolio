import { Project } from './../../../models/project';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project?: Project;

  constructor() { }

  ngOnInit() {
  }

}
