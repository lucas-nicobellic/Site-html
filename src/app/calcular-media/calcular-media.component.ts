import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  standalone: false,
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.css'
})
export class CalcularMediaComponent {
ac1!: number;
  ac2!: number;
  ag!: number;
  af!: number;
  media!: number;
  status!: string;
  
  calcularMedia() {
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    this.media = parseFloat(this.media.toFixed(2)); // arredonda para 2 casas
    this.status = this.media >= 5 ? 'Aprovado' : 'Reprovado';
  }
}


