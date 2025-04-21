export interface UserType{
    name : string;
    email : string;
    password : string;
    id : number;
    taskCount : {
     active : number,
     newTask : number,
     completed : number,
     failed : number
    },
    tasks : {
      title : string,
      date : string,
      description : string,
      categories : string,
      active : boolean,
      newTask : boolean,
      completed : boolean,
      failed : boolean
    }[]
  }

  export interface ContextType {
    employees : UserType[],
    admin : UserType[]
  }

  export interface TaskType {
    title : string,
    date : string,
    description : string,
    categories : string,
    active : boolean,
    newTask : boolean,
    completed : boolean,
    failed : boolean
  }
  