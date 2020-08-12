import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  actualizado: string;

  faqs: any;

  constructor(private dataService: DataService) {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.faqs = data;
      this.actualizado = this.faqs.updated;
    });
  }

}
