import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../task';
import { UiService } from '../../services/ui/ui.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  showAddTask!: boolean;
  reminder: boolean = false;
  subscription!: Subscription;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
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
