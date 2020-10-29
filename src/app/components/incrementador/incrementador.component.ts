import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input() porcentaje: number = 50;
  @Input() leyenda: string = 'leyenda';
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  @ViewChild('txtProgress')  txtProgress: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  cambiarValor(valor: number){
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && valor < 0){
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
  }
  onChanges(newValue: number) {
    // const elementoHTML: any = document.getElementsByName('porcentaje')[0];
    // console.log(this.txtProgress);
    // console.log(elementoHTML.value);
    // console.log(newValue);
    if (newValue >= 100) {
      this.porcentaje = 100;

    }else if ( newValue <= 0) {
      this.porcentaje = 0;
    }else {

      this.porcentaje = newValue;
    }
    // elementoHTML.value = Number(this.porcentaje);
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);

    this.txtProgress.nativeElement.focus();
  }

}
