import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos = [{ text: 'text' }];

  @Input() todo!: Todo;
  @Input() index!: Number;
  @Input() deleteItem!: (args: Number) => void;
  @Input() toggleDone!: (args: Number) => void;

  constructor() {}

  ngOnInit(): void {}
}
