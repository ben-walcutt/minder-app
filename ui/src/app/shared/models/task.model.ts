export interface Task {
    id: number,
    author: string,
    tags: string[],
    title: string,
    text: string,
    relatedNotes: number[],
    relatedEvents: number[],
    createtime: Date,
    lastupdatetime: Date,
    duetime: Date,
    complete: boolean,
    completetime: Date
}