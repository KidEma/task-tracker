import { Component, Input } from '@angular/core';
import {Consts} from './consts'
import { Task } from './task';
import { State } from './state';
import { TaskDataService } from './task-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.css',
    '../../node_modules/ng2-dnd/bundles/style.css'
  ]
})
export class AppComponent {

  constructor(private taskDataService: TaskDataService) {
  }
  
  createTask(task: Task) {
    console.log("createdtask", task)

    this.taskDataService.addTask(task, 1)
    this.states = this.taskDataService.getAllStates();
  }

  removeTask(task) {
    this.taskDataService.deleteTaskById(task.id, task.stateId);
  }

  getTasks(stateId: number) {
    return this.taskDataService.getTasksByStateId(stateId);
  }


  dragOperation: boolean = false;

  states: Array<State> = this.taskDataService.getAllStates();

  addTo(task: Task, state: number) {
    task.stateId = state;
    this.taskDataService.updateTaskById(task.id, task)
    this.states = this.taskDataService.getAllStates();
  }

}
