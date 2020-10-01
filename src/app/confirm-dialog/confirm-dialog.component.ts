
import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MydialogComponent} from '../mydialog/mydialog.component';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})

export class ConfirmDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(input)
  {
   const dialogRef=this.dialog.open(MydialogComponent,
    {data: input,
    width: '350px;'}
    )

   dialogRef.afterClosed().subscribe(res =>{console.log("holis")})
  }

 

 
  ngOnInit(): void {
  }

}
