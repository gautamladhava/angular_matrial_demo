import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-open-snack',
  templateUrl: './open-snack.component.html',
  styleUrls: ['./open-snack.component.css']
})
export class OpenSnackComponent {
  snackBarRef = inject(MatSnackBarRef);
}
