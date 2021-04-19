import { Action } from "@ngrx/store";
import { Task } from "src/app/models/Task.model";

// Types
export const ADD_TASK = '[TASK] Add';
export const DONE_TASK = '[TASK] Done';
export const REMOVE_TASK = '[TASK] Remove';
export const SET_TASKS = '[TASK] Set';

export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: Task) {}
}

export class DoneTask implements Action {
  readonly type = DONE_TASK;

  constructor(public payload: string) {}
}

export class RemoveTask implements Action {
  readonly type = REMOVE_TASK;

  constructor(public payload: string) {}
}

export class SetTasks implements Action {
  readonly type = SET_TASKS;

  constructor(public payload: Task[]) {}
}

export type Actions = AddTask | DoneTask | RemoveTask | SetTasks;
