import { Component, OnInit } from "@angular/core";
import { Tache } from "./Tache";
import { TACHES } from "./mock-Tache-Liste";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  ListeTaches: Tache[] = TACHES;

  ngOnInit(): void {
    console.table(this.ListeTaches);
  }
}
