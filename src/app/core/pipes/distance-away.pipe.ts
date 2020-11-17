import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "distanceAway",
})
export class DistanceAwayPipe implements PipeTransform {
  transform(miles: number): string {
    if (!miles) {
      return null;
    }

    return miles > 1 ? `${miles} miles away` : `${miles} mile away`;
  }
}
