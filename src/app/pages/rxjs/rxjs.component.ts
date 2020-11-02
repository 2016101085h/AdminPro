import { Component, OnDestroy, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Observable, Subscription } from 'rxjs';
import { map, retry, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscripcion: Subscription;
  constructor() {
   this.subscripcion = this.regresaObservable().
    // pipe(retry(2)).
    subscribe(numero => {
      console.log(numero);
    // tslint:disable-next-line: no-shadowed-variable
    }, (error) => console.log(error), () => console.log('el observador termino'));
   }


  ngOnInit(): void {
  }
  regresaObservable(): Observable<any> {
    const obs = new Observable<any>( observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        const salida = {
          valor : contador
        }
        observer.next(salida);
        // if (contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if ( contador === 2){
        //   // clearInterval(intervalo);
        //   observer.error('Auxilio');
        // }
      }, 1000);
    }).pipe(map( resp => resp.valor),
      filter((valor, index) => {
        // console.log('filter', valor, index);
        if ((valor % 2) === 1){
          return true;
        } else{
          return false;
        }
      })
      );
    return obs;
  }
  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }

}
