import { Component, Input, OnInit } from "@angular/core";

import { AbstractControl } from "@angular/forms";
import { Location } from "src/app/core/models/location.model";
import { LocationService } from "src/app/core/services/location.service";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { take } from "rxjs/operators";

@Component({
  selector: "app-location-picker",
  templateUrl: "./location-picker.component.html",
  styleUrls: ["./location-picker.component.scss"],
})
export class LocationPickerComponent implements OnInit {
  faLocationArrow = faLocationArrow;

  @Input() location: Location;
  @Input() control: AbstractControl;

  ngOnInit(): void {}

  useCurrentLocationClick() {
    this.locationService
      .getDeviceLocation()
      .pipe(take(1))
      .subscribe((location) => {
        console.log(location);

        this.locationService
          .reverseGeocodeLocation(location.latitude, location.longitude)
          .pipe(take(1))
          .subscribe((address) => {
            console.log(address);
            this.location = {
              displayName: address.results[0].formatted_address,
              latitude: location.latitude,
              longitude: location.longitude,
              postcode: address.results
                .find((result) => result.types.includes("route"))
                .address_components.find((component) =>
                  component.types.includes("postal_code")
                ).long_name,
            };
          });
      });
  }

  constructor(private locationService: LocationService) {}
}
