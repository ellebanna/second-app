import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-secondparent',
  templateUrl:'./secondparent.component.html',
  styleUrls: ['./secondparent.component.css']
})
export class SecondparentComponent implements OnInit {
  public fullnameData: string;
  public genderData: string;
  public enrolledData: string;
  public temporaryfdata:string;
  public temporarygdata:string;
  public temporaryedata:Boolean;


  public approvedata: "Application is Approved";
  public declinedata: "Application is Declined";


  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.fullnameData=this.temporaryfdata;
    this.genderData=this.temporarygdata;
    if(this.temporaryedata){
      this.enrolledData = "Yes"; 
    }else{
      this.enrolledData = "No"; 
    }
  }
  

}
