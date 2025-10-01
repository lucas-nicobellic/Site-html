import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  standalone: false,
  templateUrl: './conversor-temperatura.component.html',
  styleUrl: './conversor-temperatura.component.css'
})
export class ConversorTemperaturaComponent {
 celsius: number = 0;
  fahrenheit: number | null = null;
  kelvin: number | null = null;

  converter() {
    if (this.celsius !== null && !isNaN(this.celsius)) {
      this.fahrenheit = (this.celsius * 9 / 5) + 32;
      this.kelvin = this.celsius + 273.15;
    }
}
}
