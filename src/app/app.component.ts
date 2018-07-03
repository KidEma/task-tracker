import { Component, Input } from '@angular/core';
import {Consts} from './consts';
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

  states: Array<State> = this.taskDataService.getAllStates();

  createTask(task: Task) {
    this.taskDataService.addTask(task);
    this.states = this.taskDataService.getAllStates();
  }

  removeTask(task: Task) {
    this.taskDataService.deleteTaskById(task.id);
    this.states = this.taskDataService.getAllStates();

  }

  getTasks(stateId: number) {
    return this.taskDataService.getTasksByStateId(stateId);
  }

  addTo(task: any, state: number) {
    task.stateId = state;
    this.taskDataService.updateTaskById(task.dragData.id, state);
    this.states = this.taskDataService.getAllStates();
  }

}
