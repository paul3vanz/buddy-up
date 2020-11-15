import * as appConstants from "../../app.constants";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Location } from "../models/location.model";
import { Observable } from "rxjs";

@Injectable()
export class LocationService {
  getDeviceLocation(): Observable<Location> {
    return new Observable((observer) => {
      if (navigator?.geolocation) {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
            observer.next({
              displayName: "Current location",
              latitude: coords.latitude,
              longitude: coords.longitude,
            });
            observer.complete();
          },
          (error) => observer.error(error),
          {
            enableHighAccuracy: true,
          }
        );
      } else {
        observer.error("Unsupported browser");
      }
    });
  }

  findLocation(search: string): Observable<any> {
    return this.http.get<any>(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
        search
      )}&types=(regions)&components=country:gb&key=${
        appConstants.GOOGLE_API_KEY
      }`
    );
  }

  geocodeLocation(placeId: string): Observable<any> {
    return this.http.get<any>(
      `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${appConstants.GOOGLE_API_KEY}`
    );
  }

  reverseGeocodeLocation(latitude: number, longitude: number): Observable<any> {
    return this.http.get<any>(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${appConstants.GOOGLE_API_KEY}`
    );
  }

  constructor(private http: HttpClient) {}
}
