import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/Task.model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  tasks: Observable<Task[]>;

  constructor(private store: Store<AppState>) {
    this.tasks = store.select('task');
  }

  ngOnInit(): void {
  }

}
