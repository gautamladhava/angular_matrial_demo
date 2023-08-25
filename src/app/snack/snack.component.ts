import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OpenSnackComponent } from '../open-snack/open-snack.component';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(OpenSnackComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
