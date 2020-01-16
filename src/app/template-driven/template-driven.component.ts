import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  fullname:string
  email:string
  gender:string
  fullname2:string
  email2:string
  gender2:string
  public fillUp = true;
  public edit = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.fullname2 = this.fullname;
    this.email2 = this.email;
    this.gender2 = this.gender;
    console.log(this.fullname2, this.email2, this.gender2)
    this.fillUp = false;
    this.edit = true;
  }
  onEdit(){
    this.edit = false;
    this.fillUp = true;
  }
}
