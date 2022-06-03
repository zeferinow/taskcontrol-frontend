import { TaskStatusName } from "./TaskStatusName";

export interface TaskOpening {
    sequenceNumber? : number;
    status? : TaskStatusName;
    title? : string;
    description? : {text?: string, mention?: []}
}