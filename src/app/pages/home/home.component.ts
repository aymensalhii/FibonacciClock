import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  current_time: Date = new Date();

  next() {
    const aux = this.current_time;
    aux.setMinutes(this.current_time.getMinutes() + 5)
    this.current_time = new Date(aux);
  }

  back() {
    const aux = this.current_time;
    aux.setMinutes(this.current_time.getMinutes() - 5)
    this.current_time = new Date(aux);
  }

  fibClock() {
    const hours = this.current_time.getHours();
    const minutes = this.current_time.getMinutes();

    console.log(hours+'-------'+minutes)
  }
}
