import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  currentEmp:Employee=null;
  currentUserSubject;
  constructor() { }

  ngOnInit(): void {
        this.currentEmp =JSON.parse(localStorage.getItem('currentUser'));
    //this.currentEmp=JSON.parse(localStorage.getItem('currentUser'))
  }

}
