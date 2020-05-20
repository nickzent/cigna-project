import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctors } from '../types/doctors';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  private json = "../assets/data.json";

  constructor(public httpClient: HttpClient) { }

  getData(): Observable<any[]> {
    return this.httpClient.get<Doctors[]>(this.json);
  }
<<<<<<< HEAD
  
=======
>>>>>>> e5d8f52cc39e8a7ad0cc856448df45e4d6a592cc

}