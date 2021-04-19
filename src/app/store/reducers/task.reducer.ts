import { Task } from "src/app/models/Task.model";
import * as TaskActions from '../actions/task.actions';

const initial: Task = {
  id: null,
  name: null,
  description: null,
  done: false
}

export function taskReducer(state: Task[] = [initial], action: TaskActions.Actions) {
  switch(action.type) {
    case TaskActions.ADD_TASK:
      return [...state, action.payload];
    case TaskActions.DONE_TASK:
      return state.map(el => el.id === action.payload ? el.done = true : el);
    case TaskActions.REMOVE_TASK:
      return state.filter(el => el.id !== action.payload);
    default:
      return state;
  }
}
