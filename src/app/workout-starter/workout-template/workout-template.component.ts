import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workout-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-template.component.html',
  styleUrl: './workout-template.component.scss'
})
export class WorkoutTemplateComponent {
  @Input() title: string = '';
  @Input() exercises: string[] = [];
}
