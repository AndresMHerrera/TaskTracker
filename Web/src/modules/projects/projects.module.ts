import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProjectDetailsPageComponent } from './pages/project-details-page/project-details-page.component';


@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectDetailsPageComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class ProjectsModule { }
