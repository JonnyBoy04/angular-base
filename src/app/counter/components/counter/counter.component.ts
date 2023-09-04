import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increseaBy(1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increseaBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increseaBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
