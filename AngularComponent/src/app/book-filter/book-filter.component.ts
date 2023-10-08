import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.css']
})

export class BookFilterComponent {	
  @Input() all: number = 0;
  @Input() available: number = 0;
  @Input() unavailable: number = 0;

	selectedButtonValue: string = 'All' // value should be same as used in corresponding html file
}
