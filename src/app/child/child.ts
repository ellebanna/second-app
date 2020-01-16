import { Component,OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styles: ['.internal{color:blue; font-size:170%}']
})
export class ChildComponent implements OnInit {
    @Input() parentData : string;
    @Output() childEvent = new EventEmitter();
    public childData : string;
    constructor() { }
  
    ngOnInit() {
    }
  
   
    onClick(){
        this.childEvent.emit(this.childData);
        console.log(this.childData)
      }
  }
