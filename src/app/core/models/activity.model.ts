import { ActivityType } from "../enums/activity-type.enum";
import { Pace } from "./pace.model";
import { Range } from "./range.model";

export interface Activity {
  type: ActivityType;
  activity?: ActivityType;
  distance?: Range<number>;
  pace: Range<Pace>;
  location: Location;
}
