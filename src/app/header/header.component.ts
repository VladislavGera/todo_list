import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular ToDo';

  @Input() postItem!: (args: String,) => void;
  @Input() value!: string

  cleanInput(){
    this.postItem(this.value)
    this.value = ""
  }

  constructor() {}

  ngOnInit(): void {}
}
