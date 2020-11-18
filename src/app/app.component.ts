import {
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Router,
} from "@angular/router";

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  loading: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.loading = true;
      } else if (e instanceof NavigationCancel || e instanceof NavigationEnd) {
        this.loading = false;
      }
    });
  }
}
