import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  title!: string;
  constructor() {}
  ngOnInit(): void {
    this.title = 'Task tracker';
  }
  toggleAddTask() {
    console.log('Toggle');
  }
}
