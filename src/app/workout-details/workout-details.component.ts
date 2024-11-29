import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ExerciseDialogComponent } from '../exercise-dialog/exercise-dialog.component';

interface Exercise {
  name: string;
  weight: number | null;
  reps: number | null;
}

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
  selectedExercises: Exercise[] = [];

  constructor(private router: Router, public dialog: MatDialog) {}

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

  openExerciseDialog() {
    const availableExercises = ['Fekvenyomás', 'Guggolás', 'Húzódzkodás', 'Evezés'];
  
    const dialogRef = this.dialog.open(ExerciseDialogComponent, {
      width: '400px',
      height: '300px',
      data: { exercises: availableExercises }
    });
  
    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.addExercise(result);
      }
    });
  }

  addExercise(name: string) {
    this.selectedExercises.push({ name, weight: null, reps: null });
  }

  addNewSet(exercise: Exercise) {
    this.selectedExercises.push({ ...exercise });
  }

  cancelWorkout() {
    this.router.navigate(['/']);
  }

  finishWorkout() {
    console.log('Edzés befejezve:', this.selectedExercises);
  }

  get formattedTime(): string {
    const minutes = Math.floor(this.elapsedTime / 60);
    const seconds = this.elapsedTime % 60;
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
