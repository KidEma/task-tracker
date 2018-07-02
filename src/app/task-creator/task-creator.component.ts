import { 
  Component, 
  OnInit,
   Output,
   Input,
  EventEmitter 
} from '@angular/core';

import {Task } from '../task'
import { Consts } from '../consts'

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }

  @Output() createTask = new EventEmitter<Task>();
  colors: Array<string> = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', 'white'];

  
  fullForm: boolean = false;

  newTask: Task = new Task({
    name: '',
    description: '',
    stateId: Consts.STATE_PLANNED_ID,
    color: 'white'
  });

  onCreateTask() {
    const { id, name, description, estimate, stateId, color } = this.newTask;

   if (this.newTask.name && this.newTask.description)
      this.createTask.next({id, name, description, estimate, stateId, color});

    this.reset();
    this.fullForm = false;
  }

  reset() {
    this.newTask = {
      id: null,
      name: '',
      description: '',
      estimate: 0,
      stateId: Consts.STATE_PLANNED_ID,
      color: 'white'
    };
  }

  toggle(value: boolean) {
    this.fullForm = value;
  }

  onColorSelect(color: string) {
     this.newTask.color = color;
   }

}
