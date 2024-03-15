import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  reminder: boolean = false;
  constructor() {}
  ngOnInit(): void {}
  onSubmit(): void {
    if (!this.text || !this.day || !this.reminder) {
      alert('Please fill the form');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    //Add emit
    this.onAddTask.emit(newTask);
    // clear the form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
