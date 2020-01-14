import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  isActive = true;
  activity = "Activity 3";
  imageUrl = "https://lh3.googleusercontent.com/-UEmFVjgfQQQ/Xh0ietCqKkI/AAAAAAAABNo/0wKO10p5wyQLE-7ZBYtIp-xu_ze0hW3sACK8BGAsYHg/s168/2020-01-13.png"
  constructor() { }

  ngOnInit() {
  }
  onClick1(){
    this.isActive = !this.isActive;
    console.log("state of", this.isActive)
  }
  onClick2(){
    this.isActive = !this.isActive;
  }

}
