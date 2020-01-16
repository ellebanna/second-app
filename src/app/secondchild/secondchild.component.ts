import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent implements OnInit {
  
  @Input() nameData: string;
  @Input() enrolledData: string;
  @Input() genderData: string;
  // @Output() childEvent = new EventEmitter ();
  @Output() notifEvent = new EventEmitter ();
  @Output() decline2 = new EventEmitter ();
  public notif :string

  people: any[] = [
  ]
  people2: any[] = [
  ]

  constructor() { }

  ngOnInit() {
  }
  onClickApprove(){
    this.notifEvent.emit("Application is Approved!");
    this.people.push({ 
      name : this.nameData,
      status: this.enrolledData,
      gender : this.genderData
    });
    console.log("nakasod")  
  }
  onClickDecline(){
    this.notifEvent.emit("Application is Declined!");
    this.people2.push({ 
      name : this.nameData,
      status: this.enrolledData,
      gender : this.genderData
    });
    this.decline2.emit(this.people2);
    
  }
}
