import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule
  ],
  template: `
    <h2>Válassz egy gyakorlatot</h2>
    <mat-form-field appearance="fill">
      <mat-label>Gyakorlat</mat-label>
      <mat-select (selectionChange)="onSelect($event.value)">
        <mat-option *ngFor="let exercise of exercises" [value]="exercise">
          {{ exercise }}
        </mat-option>
      </mat-select>
    </mat-form-field>
    <div class="actions">
      <button mat-button (click)="onCancel()">Mégse</button>
    </div>
  `,
})
export class ExerciseDialogComponent {
  exercises: string[] = ['Fekvenyomás', 'Guggolás', 'Húzódzkodás', 'Evezés'];

  constructor(public dialogRef: MatDialogRef<ExerciseDialogComponent>) {}

  onSelect(exercise: string) {
    this.dialogRef.close(exercise);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
