export interface Comments {
    id: number,
    comment: string,
    taskId: number,
}

export interface Task {
    id: number,
    Title: string,
    BoardId?: number,
    Description?: string,
    CreatedAt?: string,
    Status?: string,
    Assignee?: string,
    Reporter?: string,
    Comments?: Comments[],
}

export interface Board {
    id: number,
    tasks?: Task[],
    Title: string,
}

export interface RouteI {
    path: string;
    component?: React.FC;
    isProtected: boolean;
}
