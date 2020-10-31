
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor( public ajustes: SettingsService ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(color: string, link: any) {
    this.aplicarCheck(link);
    this.ajustes.aplicarTema(color);


  }
  aplicarCheck(link: any) {
    const selector: any = document.getElementsByClassName('selector');
    // tslint:disable-next-line: prefer-for-of
    // for (let i = 0; i < selector.length; i++){
      //     selector[i].classList.remove('working');
      // }
      // tslint:disable-next-line: prefer-const
    for (let ref of selector) {
        ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {
    const selector: any = document.getElementsByClassName('selector');
    const tema = this.ajustes.ajustes.tema;

    for (const ref of selector) {
      if ( ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
    }
  }

}
}
