import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  standalone: false,
  templateUrl: './apolice-seguro.component.html',
  styleUrl: './apolice-seguro.component.css'
})
export class ApoliceSeguroComponent {
nome: string='';
sexo: string='';
idade: number= 0;
valorAuto: number =0;
valorApolice: number | undefined;


calcularApolice(){
  if (this.sexo === 'masculino'){
    if(this.idade <= 25){
      this.valorApolice = this.valorAuto *0.15;
    }else{
      this.valorApolice = this.valorAuto * 0.10;
    }
  }else if (this.sexo === 'feminino'){
    this.valorApolice = this.valorAuto * 0.08;
  }
  }
}


