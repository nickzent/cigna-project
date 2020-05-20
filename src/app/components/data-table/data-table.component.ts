import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Doctors } from 'src/app/types/doctors';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {

ItemsArray= [];

constructor(
    private dataService: DataServiceService,
          ) { }
@Input()
public contact;

ngOnInit() {
  this.dataService.getData().subscribe((res: any[])=>{
    this.ItemsArray= res;
  })  
}
@Input()
public doctors:  Doctors[] ;

public currentContact: Doctors;

searchModel: string;


@Output() public select: EventEmitter<{}> = new EventEmitter();

public onSelect(doctor: Doctors): void {
  this.currentContact = doctor; 
  this.select.emit(doctor);
}
}