import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ProjectsPageComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ProjectsModule { }
