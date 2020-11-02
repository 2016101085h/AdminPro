import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(() => console.log('terminal')).catch((error) => console.log(error));
  }

  ngOnInit(): void {
  }
  contarTres(): Promise<boolean> {
      // tslint:disable-next-line: prefer-const
      let promesa = new Promise<boolean>((resolve, reject) => {
        let contador = 0;
        const intervalo = setInterval(() => {
          contador += 1;
          if (contador === 3) {
            resolve(true);
            clearInterval(intervalo);
          }
        }, 1000);
      });
      return promesa;
  }

}
