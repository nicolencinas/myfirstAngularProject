import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-digital-watch',
  templateUrl: './digital-watch.component.html',
  styleUrls: ['./digital-watch.component.css']
})
export class DigitalWatchComponent implements OnInit {
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

    var hours = "0"+date.getHours()+"";
	  var minutes = "0"+date.getMinutes()+"";
	  var secs = "0"+date.getSeconds()+"";
    

    this.secs.nativeElement.innerHTML=secs.substring(secs.length-2,secs.length);
    this.mins.nativeElement.innerHTML=minutes.substring(minutes.length-2,minutes.length);
    this.hours.nativeElement.innerHTML=hours.substring(hours.length-2,hours.length);



    //this.secs.nativeElement.style.transform="rotate("+degSecs+"deg)";
    //this.mins.nativeElement.style.transform="rotate("+degMinutes+"deg)";
    //this.hours.nativeElement.style.transform="rotate("+degHours+"deg)";
  }

}
