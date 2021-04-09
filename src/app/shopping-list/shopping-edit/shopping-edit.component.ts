import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  names = [];
  amounts = [];
  constructor() { }

  ngOnInit(): void {
  }
  /*push_names(event:Event){
    this.names.push(Event.target)
  }*/
}
