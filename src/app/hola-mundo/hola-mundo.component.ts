import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  @Input() message:string;
  @Output() MessageReturn=new EventEmitter<string>();
  

  constructor() { }

  ngOnInit() {
    this.message="Hola mundo";
    this.MessageReturn.emit(this.message);
  }
  clickLike(message: string){
    this.MessageReturn.emit(`CHUCK NORRIS RULES, ${message}`);
  }

}
