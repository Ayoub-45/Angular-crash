import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { NgFor } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { TaskComponent } from '../task/task.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
}
