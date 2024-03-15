import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { TASKS } from '../../mock-tasks';
import { NgFor } from '@angular/common';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  ngOnInit(): void {}
}
