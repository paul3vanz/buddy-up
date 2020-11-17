import { Gender } from "../enums/gender.enum";
import { Location } from "./location.model";
import { Preferences } from "./preferences.model";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  dateOfBirth: string;
  email: string;
  clubId: number;
  location: Location;
  preferences: Preferences;
}
