import { ProjectMetadataModel } from './project-metadata.model';

export class ProjectModel {
    id: number;
    name: string;
    description: string;
    metadata: ProjectMetadataModel;

    constructor(init?: Partial<ProjectModel>) {
        Object.assign(this, init);
    }
}
