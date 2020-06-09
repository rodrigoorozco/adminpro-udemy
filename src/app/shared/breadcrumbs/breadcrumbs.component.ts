import { Component, OnInit } from "@angular/core";
import { Router, ActivationEnd } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { Title, Meta, MetaDefinition } from "@angular/platform-browser";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styles: [],
})
export class BreadcrumbsComponent implements OnInit {
  title: string;
  constructor(
    private router: Router,
    private _pagTitle: Title,
    private meta: Meta
  ) {
    this.getDataRoute().subscribe((event) => {
      this.title = event.title;
      this._pagTitle.setTitle(this.title);

      const metaTag: MetaDefinition = {
        name: "description",
        content: this.title,
      };

      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {}

  getDataRoute() {
    return this.router.events.pipe(
      filter((event) => {
        if (event instanceof ActivationEnd) {
          return true;
        }
      }),
      filter((event: ActivationEnd) => {
        if (event.snapshot.firstChild === null) {
          return true;
        }
      }),
      map((event: ActivationEnd) => {
        return event.snapshot.data;
      })
    );
  }
}
