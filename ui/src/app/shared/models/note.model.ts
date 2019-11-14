export interface Note {
    id: number,
    title: string,
    text: string,
    tags: string[],
    author: string,
    createtime: Date,
    lastupdatetime: Date
}