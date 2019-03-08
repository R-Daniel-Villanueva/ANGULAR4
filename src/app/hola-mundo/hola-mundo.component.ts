import { Component, OnInit, Input, Output } from '@angular/core';
import { HeaderRowOutlet } from '@angular/cdk/table';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { EventEmitter } from 'protractor';

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
    this.MessageReturn.emit('Mensaje desde Hola Mundo');
  }
  clickLike(wmessage: string){
    this.MessageReturn.emit(`CHUCK NORRIS VS BRUCE LEE, $(message)`);
  }

}
