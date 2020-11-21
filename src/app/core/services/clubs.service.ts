import { LoadingState, LoadingStates } from "../models/loading-state.model";

import { BehaviorSubject } from "rxjs";
import { Club } from "../models/club.model";
import { ClubsResponse } from "../models/clubs-response";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ClubsService {
  private readonly _clubs = new BehaviorSubject<Club[]>([]);
  private readonly _loadingState = new BehaviorSubject<LoadingState>(
    LoadingStates.INIT
  );

  readonly clubs$ = this._clubs.asObservable();
  readonly loadingState$ = this._loadingState.asObservable();

  get clubs(): Club[] {
    return this._clubs.getValue();
  }

  set clubs(clubs: Club[]) {
    this._clubs.next(clubs);
  }

  get loadingState(): LoadingState {
    return this._loadingState.getValue();
  }

  set loadingState(loadingState: LoadingState) {
    this._loadingState.next(loadingState);
  }

  loadClubs(): void {
    this.loadingState = LoadingStates.LOADING;

    this.httpClient
      .get<ClubsResponse>(
        "http://bpj.org.uk/api/public/index.php/membership/clubs"
      )
      .pipe(take(1))
      .subscribe((clubsResponse) => {
        this.loadingState = LoadingStates.LOADED;
        this.clubs = clubsResponse.Clubs.map((club) => ({
          id: club.ClubId,
          name: club.ClubName,
        }));
      });
  }

  constructor(private httpClient: HttpClient) {}
}
