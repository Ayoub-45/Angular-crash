import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
import { Task } from '../../task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgStyle } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgStyle, FontAwesomeModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}
  ngOnInit(): void {}
  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }
}
