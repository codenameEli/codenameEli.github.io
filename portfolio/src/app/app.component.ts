import { Component } from '@angular/core';

import { Project } from './project/project';

const PROJECTS: Project[] = [
  {id: 1, name: 'Salesforce Admin Blog', imageSrc: './assets/images/salesforce-admin.png'},
  {id: 2, name: 'Pocono Raceway', imageSrc: './assets/images/salesforce-admin.png'},
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  projects = PROJECTS;
}
