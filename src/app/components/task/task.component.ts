import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FaIconComponent, NgStyle],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;
  constructor() {}
  ngOnInit(): void {}
}
