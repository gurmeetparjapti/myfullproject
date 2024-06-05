import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatdilogComponent } from '../matdilog/matdilog.component';
@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.scss']
})
export class IndexpageComponent implements OnInit {
constructor(public dialog: MatDialog){}

ngOnInit(): void {
  setTimeout(() => {
    this.openDialog(); }, 2000);

  
}


openDialog() {
  const dialogRef = this.dialog.open(MatdilogComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}
