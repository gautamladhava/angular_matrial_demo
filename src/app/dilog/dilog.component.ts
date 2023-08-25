import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenDilogComponent } from '../open-dilog/open-dilog.component';
import { OpernBgDilogComponent } from '../opern-bg-dilog/opern-bg-dilog.component';

@Component({
  selector: 'app-dilog',
  templateUrl: './dilog.component.html',
  styleUrls: ['./dilog.component.css']
})
export class DilogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(OpenDilogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
 

  openDialog1() {
    const dialogRef = this.dialog.open(OpernBgDilogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
