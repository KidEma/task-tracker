import { Task } from './task'
export class State {
    id: number;
    name: string = '';
    tasks: Task[] = [];
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
