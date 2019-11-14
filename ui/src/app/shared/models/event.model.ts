export interface Event {
    id: number,
    title: string,
    tags: string[],
    creator: string,
    createtime: Date,
    lastupdatetime: Date,
    starttime: Date,
    endtime: Date
}