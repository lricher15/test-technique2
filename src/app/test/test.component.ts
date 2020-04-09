import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  temp: any;
  rise: any;
  down: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getTemp() {
    return this.temp;
  }

  getRise() {
    return this.rise;
  }

  getDown() {
    return this.down;
  }

  getData() {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=acc2caec8e1294a40424dde232848027').subscribe(
      (data: any) => {
        if (!data) {
          this.temp = data.main.temp;
          console.log('==>', data);
        }
      }
    );
  }

}
