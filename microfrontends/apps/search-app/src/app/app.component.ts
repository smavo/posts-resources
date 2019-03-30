import { Component, ElementRef, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {

  filter: string = '';

  constructor(private el: ElementRef) {}
  
  onChange() {
    this.el.nativeElement
      .dispatchEvent(new CustomEvent('filter-changed', {
        detail: this.filter,
        bubbles: true
      }));
  }
}
