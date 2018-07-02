import {Consts} from './consts'

export class Task {
    id: number;
    name: string = '';
    description: string = '';
    estimate: number = 0;
    stateId: number = Consts.STATE_PLANNED_ID;
    color: string = 'white';
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }