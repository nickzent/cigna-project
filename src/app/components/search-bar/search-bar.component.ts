import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Doctors } from 'src/app/types/doctors';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateSearchModel(value) {
    this.searchModel = value;
    this.searchModelChange.emit(this.searchModel);
  }

}
