import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Component} from '@angular/core';
import { HolaMundoComponent } from './hola-mundo.component';

describe('HolaMundoComponent', () => {
  let component: HolaMundoComponent;
  let fixture: ComponentFixture<HolaMundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaMundoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'card-fancy-example',
  templateUrl: 'card-fancy-example.html',
  styleUrls: ['card-fancy-example.css'],
})
export class CardFancyExample {}





 