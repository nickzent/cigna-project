import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {

ItemsArray= [];

constructor(private dataService: DataServiceService) { }

ngOnInit() {
  this.dataService.getData().subscribe((res: any[])=>{
    this.ItemsArray= res;
    console.dir(this.ItemsArray);
  })  
}

}