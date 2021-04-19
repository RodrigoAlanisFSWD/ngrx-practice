import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/Task.model';
import { AppState } from 'src/app/store/app.state';
import uniqid from 'uniqid';
import * as TaskActions from '../../store/actions/task.actions';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  tasks: Observable<Task[]>;
  form: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
    ) {
    this.tasks = store.select('task');
    this.form = this.fb.group({
      "name": ["", Validators.required]
    });

    if (localStorage.getItem('tasks')) {
      this.store.dispatch(new TaskActions.SetTasks(JSON.parse(localStorage.getItem('tasks'))))
    }
  }

  ngOnInit(): void {
  }

  create({ name }: any) {
    const id = uniqid();
    this.store.dispatch(new TaskActions.AddTask({id: id, name: name, done: false}));
  }

  delete(id: string) {
    this.store.dispatch(new TaskActions.RemoveTask(id))
  }

  done(id: string) {
    this.store.dispatch(new TaskActions.DoneTask(id))
  }
}
