import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-manually',
  template: '<p class = "internal"> Create Component Manually!</p>',
  styles: ['.internal{color:blue; font-size:170%}']
})
export class ManuallyComponent implements OnInit {

    constructor() { }
  
    ngOnInit() {
    }
  
  }