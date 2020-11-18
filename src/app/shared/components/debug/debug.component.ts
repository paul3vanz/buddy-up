import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-debug",
  templateUrl: "./debug.component.html",
  styleUrls: ["./debug.component.scss"],
})
export class DebugComponent {
  readonly isProduction = environment.production;
}
