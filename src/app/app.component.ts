import { Component } from '@angular/core';
import { Doctors } from './types/doctors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cigna-project-app';
  searchModel: string;
  doctors: Doctors
}
