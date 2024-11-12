import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatInputModule, FormsModule],
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.scss']
})
export class WorkoutDetailsComponent implements OnInit, OnDestroy {
  workoutName: string = 'Napi edzés';
  isEditing: boolean = false;
  elapsedTime: number = 0;
  timerInterval: any;

  constructor(private router : Router) {}

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.elapsedTime++;
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
  }

  saveWorkoutName() {
    this.isEditing = false;
  }

  addExercise() {
    // Gyakorlat hozzáadásának logikája
  }

  cancelWorkout() {
    this.router.navigate(['/']);
  }

  finishWorkout() {
    // Edzés befejezése logika
  }

  get formattedTime(): string {
    const minutes = Math.floor(this.elapsedTime / 60);
    const seconds = this.elapsedTime % 60;
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
