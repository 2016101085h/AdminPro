import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private title: Title,
              private meta: Meta) {
    // this.route.params.subscribe((con) => console.log(con));
    this.getDataRoute().subscribe( data => {
      console.log(data);
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);
      const metaTag: MetaDefinition = {
        name: 'Description',
        content: this.titulo
      };
      this.meta.addTag(metaTag);
    });
   }

  ngOnInit(): void {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data));
  }

}
