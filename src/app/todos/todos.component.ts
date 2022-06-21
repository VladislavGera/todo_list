import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  
  @Input() list!: Todo[];
  @Input() deleteItem!: (args: Number) => void;
  @Input() toggleDone!: (args: Number) => void;


  constructor() {}

  ngOnInit(): void {}
}
