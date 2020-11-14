import { ActivityType } from "../enums/activity-type.enum";
import { Pace } from "./pace.model";
import { Range } from "./range.model";

export interface Preferences {
  activityType?: ActivityType;
  distance?: Range<number>;
  pace: Range<Pace>;
  location: Location;
  alerts: boolean;
}
