import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
  @Input() data: Array<any> = []
  @Input() labels: Array<any> = [];
  @Input() type: string = '';
  @Input() leyenda: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
