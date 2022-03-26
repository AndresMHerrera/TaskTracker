import { NavigationService } from './../../../shared/services/navigation/navigation.service';
import { AppConfigService } from './../../../shared/services/app-config/app-config.service';
import { ProjectsService } from './../../../shared/services/projects/projects.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectModel } from '../../models/project.model';

@Component({
    selector: 'tt-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
    displayedColumns: string[] = ['name', 'description', 'open', 'closed', 'total'];
    pageSizeOptions: number[] = [5, 10, 25, 100];
    dataSource: MatTableDataSource<ProjectModel> = new MatTableDataSource();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private projectsService: ProjectsService,
                private navigationService: NavigationService) {
    }

    ngOnInit(): void {
        this.projectsService.getProjects().subscribe(
            (data) => {
                this.dataSource.data = data;
            }
        );
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    getTableColumnCount(): number {
        return this.displayedColumns.length;
    }

    onSelectProject(project: ProjectModel): void {
      this.navigationService.goToProjectDetails(project.id);
    }
}
