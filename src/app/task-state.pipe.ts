import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task'
import { State } from './State'

@Pipe({
  name: 'taskState'
})
export class TaskStatePipe implements PipeTransform {

  transform(value: Array<State>, stateId: number): number {
    return value
    .filter(x => x.id == stateId)[0].tasks
    .map((x) => x.estimate)
    .reduce((x, y) => x + y, 0)
  }
}
