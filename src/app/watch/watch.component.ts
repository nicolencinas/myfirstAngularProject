import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DigitalWatchComponent } from '../digital-watch/digital-watch.component';
import { MydialogComponent } from '../mydialog/mydialog.component';



@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./css/watch.component.css']
  
})




export class WatchComponent implements OnInit 
{
  @ViewChild ("hours") hours: ElementRef;
  @ViewChild ("secs") secs: ElementRef;
  @ViewChild ("mins") mins: ElementRef;

  constructor(public dialog: MatDialog) 
  {
   
   }



  ngOnInit(): void 
  {
    

    setInterval (()=>{
      const date=new Date();
      this.updateClock(date);
    },1000);
  }

  updateClock(date)
  {

    var hours = date.getHours();
	  var minutes = date.getMinutes();
	  var secs = date.getSeconds();
    
    if (hours >= 12) {
     	var degHours = hours / 12 * 360;
    }  else {
    	var degHours = hours / 24 * 360;
    }


    degHours += minutes / 60 * 30;
    var degMinutes = minutes / 60 * 360;
    var degSecs = secs / 60 * 360;

   
   

    this.secs.nativeElement.style.transform="rotate("+degSecs+"deg)";
    this.mins.nativeElement.style.transform="rotate("+degMinutes+"deg)";
    this.hours.nativeElement.style.transform="rotate("+degHours+"deg)";
  }

  public showDate()
  {
  
    
    const dialogRef=this.dialog.open(DigitalWatchComponent,
      {
      width: '350px;'}
      )
  
     dialogRef.afterClosed().subscribe(res =>{console.log("holis")})

   
  }
  

  
  

  
  

  

  

}
