import { Club } from "./club.model";
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
  club: Club;
  location: Location;
  preferences: Preferences;
}
