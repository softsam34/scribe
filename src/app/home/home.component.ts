import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name:string='Internshala';
amount:number=1999.1344;
amountMoney:number=1999.1344;
dateofBirth=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}

