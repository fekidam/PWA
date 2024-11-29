import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './exercise-dialog.component.html',
  styleUrls: ['./exercise-dialog.component.scss'],
})
export class ExerciseDialogComponent {
  exercises: string[] = ['Fekvenyomás', 'Guggolás', 'Húzódzkodás', 'Evezés'];
  selectedExercise: string | null = null;

  onSelect() {
    if (this.selectedExercise) {
      console.log('Kiválasztott gyakorlat:', this.selectedExercise);
    } else {
      console.error('Nincs kiválasztva gyakorlat!');
    }
  }

  onCancel() {
    console.log('Kiválasztás megszakítva.');
  }
}
