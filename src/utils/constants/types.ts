export interface Comments {
    id?: number,
    comment: string,
    user: string,
    taskId: number,
}

export interface Task {
    id: number,
    Title: string,
    BoardId: number,
    CreatedAt: number,
    Description?: string,
    Status: string,
    Assignee?: string,
    Reporter?: string,
}

export interface Board {
    id: number,
    Title: string,
}

export interface RouteI {
    path: string;
    component?: React.FC;
    isProtected: boolean;
}
