export interface taskType {
  name: string;
  isDo: boolean;
  createdAt: Date;
  author: string
}


export interface typeMakeTask {
    addTask:(task:string,author:string)=> void,
    removeTask:(nameTask:string)=>void;
}