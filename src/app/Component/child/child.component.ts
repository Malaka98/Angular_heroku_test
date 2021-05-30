import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData: any;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  event() {
    this.childEvent.emit("Child Data");
  }

}
