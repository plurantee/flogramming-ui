import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from './projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsUrl = 'https://flogramming.herokuapp.com/api/projects'
  projects: Projects[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Projects[]>(this.projectsUrl).subscribe((projects: Projects[]) => this.projects = projects);
  }
  isPhotoValid(projectPhoto: any): boolean {
    return projectPhoto.length !== 0;
  }
}
