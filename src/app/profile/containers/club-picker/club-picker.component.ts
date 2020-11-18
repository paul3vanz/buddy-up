import { AbstractControl, FormControl } from "@angular/forms";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Observable, Subject, merge } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  withLatestFrom,
} from "rxjs/operators";

import { Club } from "src/app/core/models/club.model";
import { ClubsService } from "src/app/core/services/clubs.service";
import { NgbTypeahead } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-club-picker",
  templateUrl: "./club-picker.component.html",
  styleUrls: ["./club-picker.component.scss"],
})
export class ClubPickerComponent implements OnInit {
  @Input() control: AbstractControl;

  clubs: Club[];

  constructor(private clubsService: ClubsService) {}

  ngOnInit(): void {
    this.clubsService.loadClubs();
  }

  model: any;

  @ViewChild("instance", { static: true }) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) => {
    console.log("test");

    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );

    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.instance.isPopupOpen())
    );

    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      withLatestFrom(this.clubsService.clubs$),
      map(([term, clubs]) =>
        term === ""
          ? []
          : clubs.filter((club) =>
              club.name.toLowerCase().includes(term.toLowerCase())
            )
      ),
      map((results) => results.slice(0, 10))
    );
  };

  formatter = (club: Club) => club.name;
}
