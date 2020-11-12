import { Activity } from '../enums/activity.enum';
import { Gender } from '../enums/gender.enum';
import { Pace } from './pace.model';
import { Range } from './range.model';

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    gender: Gender;
    email: string;
    clubId: string,
    preferences?: {
        activity: Activity,
        distance: Range<number>,
        pace: Range<Pace>,
    }
}