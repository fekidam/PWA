import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { WorkoutTemplateComponent } from './workout-template/workout-template.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-starter',
  standalone: true,
  imports: [RouterModule, MatButtonModule, WorkoutTemplateComponent, CommonModule],
  templateUrl: './workout-starter.component.html',
  styleUrls: ['./workout-starter.component.scss']
})
export class WorkoutStarterComponent {
  workoutTemplates = [
    {
      title: 'Mell edzés',
      exercises: ['Fekvenyomás', 'Tárogatás', 'Kábeles kereszthúzás']
    },
    {
      title: 'Hát edzés',
      exercises: ['Húzódzkodás', 'Evezés', 'Lehúzás széles fogással']
    },
    {
      title: 'Láb edzés',
      exercises: ['Guggolás', 'Lábhajlítás gépen', 'Lábnyújtás gépen']
    }
  ];

  constructor(private router: Router) {}

  startWorkout() {
    this.router.navigate(['/workout-details']);
  }
}
