export class ProjectMetadataModel {

    openTasks: number;
    closedTasks: number;
    totalTasks: number;

    constructor(init?: Partial<ProjectMetadataModel>) {
        Object.assign(this, init);
    }
}
