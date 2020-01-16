import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.html',
  
  styles: ['.internal{color:blue; font-size:170%}']
})
export class ParentComponent implements OnInit {
    public pdata: string;
    public cdata: string;
    public temparentData:string;
    
    constructor() { }
  
    
    ngOnInit() {
    }
    onClick1(){
        this.pdata = this.temparentData
        console.log(this.temparentData)
      }
  
  }