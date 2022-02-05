export type TabClickAction = () => void;

export class TabModel {
    displayName: string;
    action: TabClickAction;

    constructor(displayName: string, action:()=>void ) {
        this.displayName = displayName;
        this.action = action;
    }
}
