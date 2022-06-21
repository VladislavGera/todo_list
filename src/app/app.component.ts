import { Component, OnInit } from '@angular/core';

export interface Todo {
  text: String;
  complete: Boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  list!: Todo[];
  value: string = '';
  deleteItem!: (args: Number) => void;
  toggleDone!: (args: Number) => void;
  postItem!: (args: String) => void;

  ngOnInit() {
    this.list = [
      { text: 'text1', complete: false },
      { text: 'text2', complete: false },
      { text: 'text3', complete: false },
    ];

    this.postItem = (value) => {
      
      if (value !== '') {
        this.list.push({
          text: value,
          complete: false,
        });
      }
    };

    this.deleteItem = (id) => {
      this.list = this.list.filter((item, index) => {
        return id !== index;
      });
    };

    this.toggleDone = (id) => {
      this.list.map((item, index) => {
        if (index === id) item.complete = !item.complete;
        return item;
      });
    };
  }
}
