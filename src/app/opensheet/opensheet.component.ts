import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomsheetComponent } from '../bottomsheet/bottomsheet.component';

@Component({
  selector: 'app-opensheet',
  templateUrl: './opensheet.component.html',
  styleUrls: ['./opensheet.component.css']
})
export class OpensheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomsheetComponent);
  }
}
