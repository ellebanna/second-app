import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-data-driven',
  templateUrl: './template-data-driven.component.html',
  styleUrls: ['./template-data-driven.component.css']
})
export class TemplateDataDrivenComponent implements OnInit {
 
  fullname: string;

  reactiveForm = this.fb.group({
    fullname:['',Validators.required],
  })

  constructor( private fb:FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.fullname)
  }
  onSubmitData(){
    console.log(this.reactiveForm.value)
  }

}
