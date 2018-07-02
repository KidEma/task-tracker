import { Injectable } from '@angular/core';
import { Task } from './task';
import { State } from './state';
import { Consts } from './consts';


@Injectable()
export class TaskDataService {

  tasks: Task[] =[
    new Task({
    id: 0,
    name: 'Example task',
    description: '',
    estimate: 10,
    stateId: Consts.STATE_PLANNED_ID
  }),
];
  states: Array<State> = [
    new State({
      id: Consts.STATE_PLANNED_ID, 
      name: 'Planned' 
  }),
  new State({
    id: Consts.STATE_INPROGRESS_ID, 
    name: 'In progress'
  }),
  
  new State({
    id: Consts.STATE_COMPLETED_ID, 
    name: 'Completed'
  }),
];
lastId: number = 0;



  constructor() {
  }

  // Mock POST /tasks
  addTask(task: Task): TaskDataService {
    if (!task.id) {
      task.id = ++this.lastId;
    }
    this.tasks.push(task);
    return this;
  }

  // Mock DELETE /tasks/:id
  deleteTaskById(id: number): TaskDataService {
    this.tasks = this.tasks
      .filter(task => task.id !== id);
    return this;
  }

  // Mock PUT /tasks/:id
  updateTaskById(id: number, stateId: number): Task {  
    let task = this.getTaskById(id);
    console.log(task);
    if (!task) {
      return null;
    }
   // Object.assign(task, values);
    task.stateId = stateId;
    return task;
  }

 
  // Mock GET /tasks/:id
  getTaskById(id: number): Task {
    return this.tasks
      .filter(task => task.id === id)[0];
  }

    // Mock GET /tasks/:stateId
    getTasksByStateId(stateId: number): Task[] {
      return this.tasks
        .filter(x => x.stateId === stateId)        
    }


      // Mock GET /states
    getAllStates(): State[] {
      return this.states.map(x => new State ({
        id: x.id,
        name: x.name,
        tasks: this.getTasksByStateId(x.id)       
      }))
    }
  }