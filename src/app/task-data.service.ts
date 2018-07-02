import { Injectable } from '@angular/core';
import { Task } from './task';
import { State } from './state';
import { Consts } from './consts';


@Injectable()
export class TaskDataService {

  tasks: Task[] =[
    new Task({
    id: 1,
    name: 'example task',
    description: '',
    stateId: Consts.STATE_PLANNED_ID
  }),
  new Task({
    id: 2,
    name: 'example task PROGRESS',
    description: '',
    stateId: Consts.STATE_PLANNED_ID}),
    new Task({
      id: 3,
      name: 'example task COMPLETED',
      description: '',
      stateId: Consts.STATE_PLANNED_ID
    })
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
lastId: number = 3;



  constructor() {
  }

  // Mock POST /tasks
  addTask(task: Task, stateId: number): TaskDataService {
    if (!task.id) {
      task.id = ++this.lastId;
    }
    this.tasks.push(task);
    return this;
  }

  // Mock DELETE /tasks/:id
  deleteTaskById(id: number, stateId: number): TaskDataService {
    let state = this.states.filter(s => s.id === stateId)[0];

    state.tasks = state.tasks
      .filter(task => task.id !== id);
    return this;
  }

  // Mock PUT /tasks/:id
  updateTaskById(id: number, values: Object = {}): Task {  
    let task = this.getTaskById(id);
    console.log(task);
    if (!task) {
      return null;
    }
    Object.assign(task, values);
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