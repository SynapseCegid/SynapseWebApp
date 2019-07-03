import {Component} from '@angular/core';
import sampleData from '../assets/dataFollowUp.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Sensors: any = sampleData;
  title = 'cegidTest';
}
