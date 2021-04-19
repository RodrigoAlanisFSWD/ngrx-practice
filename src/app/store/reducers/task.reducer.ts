import { Task } from "src/app/models/Task.model";
import * as TaskActions from '../actions/task.actions';
import uniqid from 'uniqid';

export function taskReducer(state: Task[] = [], action: TaskActions.Actions) {
  switch(action.type) {
    case TaskActions.ADD_TASK:
      localStorage.setItem('tasks', JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case TaskActions.DONE_TASK:
      const doned = state.map(el => el.id === action.payload ? {...el, done: true} : el);
      localStorage.setItem('tasks', JSON.stringify(doned));
      return doned;
    case TaskActions.REMOVE_TASK:
      const filtered = state.filter(el => el.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filtered));
      return filtered;
    case TaskActions.SET_TASKS:
      return action.payload;
    default:
      return state;
  }
}
