/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateUserInput = {
  id?: string | null;
  cognitoId: string;
  firstName?: string | null;
  lastName?: string | null;
  gender?: string | null;
  dateOfBirth?: string | null;
  email?: string | null;
  userClubId: string;
  userLocationId: string;
  userPreferencesId: string;
};

export type ModelUserConditionInput = {
  cognitoId?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  dateOfBirth?: ModelStringInput | null;
  email?: ModelStringInput | null;
  userClubId?: ModelIDInput | null;
  userLocationId?: ModelIDInput | null;
  userPreferencesId?: ModelIDInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateUserInput = {
  id: string;
  cognitoId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  gender?: string | null;
  dateOfBirth?: string | null;
  email?: string | null;
  userClubId?: string | null;
  userLocationId?: string | null;
  userPreferencesId?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateClubInput = {
  id?: string | null;
  name: string;
};

export type ModelClubConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelClubConditionInput | null> | null;
  or?: Array<ModelClubConditionInput | null> | null;
  not?: ModelClubConditionInput | null;
};

export type UpdateClubInput = {
  id: string;
  name?: string | null;
};

export type DeleteClubInput = {
  id?: string | null;
};

export type CreateLocationInput = {
  id?: string | null;
  latitude: number;
  longitude: number;
  name: string;
  address: string;
};

export type ModelLocationConditionInput = {
  latitude?: ModelIntInput | null;
  longitude?: ModelIntInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  and?: Array<ModelLocationConditionInput | null> | null;
  or?: Array<ModelLocationConditionInput | null> | null;
  not?: ModelLocationConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateLocationInput = {
  id: string;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  address?: string | null;
};

export type DeleteLocationInput = {
  id?: string | null;
};

export type CreatePreferencesInput = {
  id?: string | null;
  distanceFrom?: number | null;
  distanceTo?: number | null;
  paceFrom?: number | null;
  paceTo?: number | null;
  alerts?: boolean | null;
  radius?: number | null;
  preferencesUserId: string;
  preferencesActivityId: string;
  preferencesLocationId: string;
};

export type ModelPreferencesConditionInput = {
  distanceFrom?: ModelIntInput | null;
  distanceTo?: ModelIntInput | null;
  paceFrom?: ModelIntInput | null;
  paceTo?: ModelIntInput | null;
  alerts?: ModelBooleanInput | null;
  radius?: ModelIntInput | null;
  preferencesUserId?: ModelIDInput | null;
  preferencesActivityId?: ModelIDInput | null;
  preferencesLocationId?: ModelIDInput | null;
  and?: Array<ModelPreferencesConditionInput | null> | null;
  or?: Array<ModelPreferencesConditionInput | null> | null;
  not?: ModelPreferencesConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdatePreferencesInput = {
  id: string;
  distanceFrom?: number | null;
  distanceTo?: number | null;
  paceFrom?: number | null;
  paceTo?: number | null;
  alerts?: boolean | null;
  radius?: number | null;
  preferencesUserId?: string | null;
  preferencesActivityId?: string | null;
  preferencesLocationId?: string | null;
};

export type DeletePreferencesInput = {
  id?: string | null;
};

export type CreateActivityInput = {
  id?: string | null;
  name: string;
};

export type ModelActivityConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelActivityConditionInput | null> | null;
  or?: Array<ModelActivityConditionInput | null> | null;
  not?: ModelActivityConditionInput | null;
};

export type UpdateActivityInput = {
  id: string;
  name?: string | null;
};

export type DeleteActivityInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  cognitoId?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  dateOfBirth?: ModelStringInput | null;
  email?: ModelStringInput | null;
  userClubId?: ModelIDInput | null;
  userLocationId?: ModelIDInput | null;
  userPreferencesId?: ModelIDInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelClubFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelClubFilterInput | null> | null;
  or?: Array<ModelClubFilterInput | null> | null;
  not?: ModelClubFilterInput | null;
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null;
  latitude?: ModelIntInput | null;
  longitude?: ModelIntInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  and?: Array<ModelLocationFilterInput | null> | null;
  or?: Array<ModelLocationFilterInput | null> | null;
  not?: ModelLocationFilterInput | null;
};

export type ModelPreferencesFilterInput = {
  id?: ModelIDInput | null;
  distanceFrom?: ModelIntInput | null;
  distanceTo?: ModelIntInput | null;
  paceFrom?: ModelIntInput | null;
  paceTo?: ModelIntInput | null;
  alerts?: ModelBooleanInput | null;
  radius?: ModelIntInput | null;
  preferencesUserId?: ModelIDInput | null;
  preferencesActivityId?: ModelIDInput | null;
  preferencesLocationId?: ModelIDInput | null;
  and?: Array<ModelPreferencesFilterInput | null> | null;
  or?: Array<ModelPreferencesFilterInput | null> | null;
  not?: ModelPreferencesFilterInput | null;
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelActivityFilterInput | null> | null;
  or?: Array<ModelActivityFilterInput | null> | null;
  not?: ModelActivityFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  cognitoId: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  dateOfBirth: string | null;
  email: string | null;
  userClubId: string;
  club: {
    __typename: "Club";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userPreferencesId: string;
  preferences: {
    __typename: "Preferences";
    id: string;
    distanceFrom: number | null;
    distanceTo: number | null;
    paceFrom: number | null;
    paceTo: number | null;
    alerts: boolean | null;
    radius: number | null;
    preferencesUserId: string;
    user: {
      __typename: "User";
      id: string;
      cognitoId: string;
      firstName: string | null;
      lastName: string | null;
      gender: string | null;
      dateOfBirth: string | null;
      email: string | null;
      userClubId: string;
      userLocationId: string;
      userPreferencesId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesActivityId: string;
    activity: {
      __typename: "Activity";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  cognitoId: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  dateOfBirth: string | null;
  email: string | null;
  userClubId: string;
  club: {
    __typename: "Club";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userPreferencesId: string;
  preferences: {
    __typename: "Preferences";
    id: string;
    distanceFrom: number | null;
    distanceTo: number | null;
    paceFrom: number | null;
    paceTo: number | null;
    alerts: boolean | null;
    radius: number | null;
    preferencesUserId: string;
    user: {
      __typename: "User";
      id: string;
      cognitoId: string;
      firstName: string | null;
      lastName: string | null;
      gender: string | null;
      dateOfBirth: string | null;
      email: string | null;
      userClubId: string;
      userLocationId: string;
      userPreferencesId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesActivityId: string;
    activity: {
      __typename: "Activity";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  cognitoId: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  dateOfBirth: string | null;
  email: string | null;
  userClubId: string;
  club: {
    __typename: "Club";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userPreferencesId: string;
  preferences: {
    __typename: "Preferences";
    id: string;
    distanceFrom: number | null;
    distanceTo: number | null;
    paceFrom: number | null;
    paceTo: number | null;
    alerts: boolean | null;
    radius: number | null;
    preferencesUserId: string;
    user: {
      __typename: "User";
      id: string;
      cognitoId: string;
      firstName: string | null;
      lastName: string | null;
      gender: string | null;
      dateOfBirth: string | null;
      email: string | null;
      userClubId: string;
      userLocationId: string;
      userPreferencesId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesActivityId: string;
    activity: {
      __typename: "Activity";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateClubMutation = {
  __typename: "Club";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClubMutation = {
  __typename: "Club";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteClubMutation = {
  __typename: "Club";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateLocationMutation = {
  __typename: "Location";
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLocationMutation = {
  __typename: "Location";
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteLocationMutation = {
  __typename: "Location";
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type CreatePreferencesMutation = {
  __typename: "Preferences";
  id: string;
  distanceFrom: number | null;
  distanceTo: number | null;
  paceFrom: number | null;
  paceTo: number | null;
  alerts: boolean | null;
  radius: number | null;
  preferencesUserId: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    firstName: string | null;
    lastName: string | null;
    gender: string | null;
    dateOfBirth: string | null;
    email: string | null;
    userClubId: string;
    club: {
      __typename: "Club";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userPreferencesId: string;
    preferences: {
      __typename: "Preferences";
      id: string;
      distanceFrom: number | null;
      distanceTo: number | null;
      paceFrom: number | null;
      paceTo: number | null;
      alerts: boolean | null;
      radius: number | null;
      preferencesUserId: string;
      preferencesActivityId: string;
      preferencesLocationId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesActivityId: string;
  activity: {
    __typename: "Activity";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePreferencesMutation = {
  __typename: "Preferences";
  id: string;
  distanceFrom: number | null;
  distanceTo: number | null;
  paceFrom: number | null;
  paceTo: number | null;
  alerts: boolean | null;
  radius: number | null;
  preferencesUserId: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    firstName: string | null;
    lastName: string | null;
    gender: string | null;
    dateOfBirth: string | null;
    email: string | null;
    userClubId: string;
    club: {
      __typename: "Club";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userPreferencesId: string;
    preferences: {
      __typename: "Preferences";
      id: string;
      distanceFrom: number | null;
      distanceTo: number | null;
      paceFrom: number | null;
      paceTo: number | null;
      alerts: boolean | null;
      radius: number | null;
      preferencesUserId: string;
      preferencesActivityId: string;
      preferencesLocationId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesActivityId: string;
  activity: {
    __typename: "Activity";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePreferencesMutation = {
  __typename: "Preferences";
  id: string;
  distanceFrom: number | null;
  distanceTo: number | null;
  paceFrom: number | null;
  paceTo: number | null;
  alerts: boolean | null;
  radius: number | null;
  preferencesUserId: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    firstName: string | null;
    lastName: string | null;
    gender: string | null;
    dateOfBirth: string | null;
    email: string | null;
    userClubId: string;
    club: {
      __typename: "Club";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userPreferencesId: string;
    preferences: {
      __typename: "Preferences";
      id: string;
      distanceFrom: number | null;
      distanceTo: number | null;
      paceFrom: number | null;
      paceTo: number | null;
      alerts: boolean | null;
      radius: number | null;
      preferencesUserId: string;
      preferencesActivityId: string;
      preferencesLocationId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesActivityId: string;
  activity: {
    __typename: "Activity";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateActivityMutation = {
  __typename: "Activity";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateActivityMutation = {
  __typename: "Activity";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteActivityMutation = {
  __typename: "Activity";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  cognitoId: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  dateOfBirth: string | null;
  email: string | null;
  userClubId: string;
  club: {
    __typename: "Club";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userPreferencesId: string;
  preferences: {
    __typename: "Preferences";
    id: string;
    distanceFrom: number | null;
    distanceTo: number | null;
    paceFrom: number | null;
    paceTo: number | null;
    alerts: boolean | null;
    radius: number | null;
    preferencesUserId: string;
    user: {
      __typename: "User";
      id: string;
      cognitoId: string;
      firstName: string | null;
      lastName: string | null;
      gender: string | null;
      dateOfBirth: string | null;
      email: string | null;
      userClubId: string;
      userLocationId: string;
      userPreferencesId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesActivityId: string;
    activity: {
      __typename: "Activity";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    cognitoId: string;
    firstName: string | null;
    lastName: string | null;
    gender: string | null;
    dateOfBirth: string | null;
    email: string | null;
    userClubId: string;
    club: {
      __typename: "Club";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userPreferencesId: string;
    preferences: {
      __typename: "Preferences";
      id: string;
      distanceFrom: number | null;
      distanceTo: number | null;
      paceFrom: number | null;
      paceTo: number | null;
      alerts: boolean | null;
      radius: number | null;
      preferencesUserId: string;
      preferencesActivityId: string;
      preferencesLocationId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetClubQuery = {
  __typename: "Club";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListClubsQuery = {
  __typename: "ModelClubConnection";
  items: Array<{
    __typename: "Club";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetLocationQuery = {
  __typename: "Location";
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type ListLocationsQuery = {
  __typename: "ModelLocationConnection";
  items: Array<{
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPreferencesQuery = {
  __typename: "Preferences";
  id: string;
  distanceFrom: number | null;
  distanceTo: number | null;
  paceFrom: number | null;
  paceTo: number | null;
  alerts: boolean | null;
  radius: number | null;
  preferencesUserId: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    firstName: string | null;
    lastName: string | null;
    gender: string | null;
    dateOfBirth: string | null;
    email: string | null;
    userClubId: string;
    club: {
      __typename: "Club";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userPreferencesId: string;
    preferences: {
      __typename: "Preferences";
      id: string;
      distanceFrom: number | null;
      distanceTo: number | null;
      paceFrom: number | null;
      paceTo: number | null;
      alerts: boolean | null;
      radius: number | null;
      preferencesUserId: string;
      preferencesActivityId: string;
      preferencesLocationId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesActivityId: string;
  activity: {
    __typename: "Activity";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPreferencessQuery = {
  __typename: "ModelPreferencesConnection";
  items: Array<{
    __typename: "Preferences";
    id: string;
    distanceFrom: number | null;
    distanceTo: number | null;
    paceFrom: number | null;
    paceTo: number | null;
    alerts: boolean | null;
    radius: number | null;
    preferencesUserId: string;
    user: {
      __typename: "User";
      id: string;
      cognitoId: string;
      firstName: string | null;
      lastName: string | null;
      gender: string | null;
      dateOfBirth: string | null;
      email: string | null;
      userClubId: string;
      userLocationId: string;
      userPreferencesId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesActivityId: string;
    activity: {
      __typename: "Activity";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetActivityQuery = {
  __typename: "Activity";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListActivitysQuery = {
  __typename: "ModelActivityConnection";
  items: Array<{
    __typename: "Activity";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  cognitoId: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  dateOfBirth: string | null;
  email: string | null;
  userClubId: string;
  club: {
    __typename: "Club";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userPreferencesId: string;
  preferences: {
    __typename: "Preferences";
    id: string;
    distanceFrom: number | null;
    distanceTo: number | null;
    paceFrom: number | null;
    paceTo: number | null;
    alerts: boolean | null;
    radius: number | null;
    preferencesUserId: string;
    user: {
      __typename: "User";
      id: string;
      cognitoId: string;
      firstName: string | null;
      lastName: string | null;
      gender: string | null;
      dateOfBirth: string | null;
      email: string | null;
      userClubId: string;
      userLocationId: string;
      userPreferencesId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesActivityId: string;
    activity: {
      __typename: "Activity";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  cognitoId: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  dateOfBirth: string | null;
  email: string | null;
  userClubId: string;
  club: {
    __typename: "Club";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userPreferencesId: string;
  preferences: {
    __typename: "Preferences";
    id: string;
    distanceFrom: number | null;
    distanceTo: number | null;
    paceFrom: number | null;
    paceTo: number | null;
    alerts: boolean | null;
    radius: number | null;
    preferencesUserId: string;
    user: {
      __typename: "User";
      id: string;
      cognitoId: string;
      firstName: string | null;
      lastName: string | null;
      gender: string | null;
      dateOfBirth: string | null;
      email: string | null;
      userClubId: string;
      userLocationId: string;
      userPreferencesId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesActivityId: string;
    activity: {
      __typename: "Activity";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  cognitoId: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  dateOfBirth: string | null;
  email: string | null;
  userClubId: string;
  club: {
    __typename: "Club";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  userPreferencesId: string;
  preferences: {
    __typename: "Preferences";
    id: string;
    distanceFrom: number | null;
    distanceTo: number | null;
    paceFrom: number | null;
    paceTo: number | null;
    alerts: boolean | null;
    radius: number | null;
    preferencesUserId: string;
    user: {
      __typename: "User";
      id: string;
      cognitoId: string;
      firstName: string | null;
      lastName: string | null;
      gender: string | null;
      dateOfBirth: string | null;
      email: string | null;
      userClubId: string;
      userLocationId: string;
      userPreferencesId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesActivityId: string;
    activity: {
      __typename: "Activity";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    preferencesLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateClubSubscription = {
  __typename: "Club";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateClubSubscription = {
  __typename: "Club";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteClubSubscription = {
  __typename: "Club";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateLocationSubscription = {
  __typename: "Location";
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateLocationSubscription = {
  __typename: "Location";
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteLocationSubscription = {
  __typename: "Location";
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePreferencesSubscription = {
  __typename: "Preferences";
  id: string;
  distanceFrom: number | null;
  distanceTo: number | null;
  paceFrom: number | null;
  paceTo: number | null;
  alerts: boolean | null;
  radius: number | null;
  preferencesUserId: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    firstName: string | null;
    lastName: string | null;
    gender: string | null;
    dateOfBirth: string | null;
    email: string | null;
    userClubId: string;
    club: {
      __typename: "Club";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userPreferencesId: string;
    preferences: {
      __typename: "Preferences";
      id: string;
      distanceFrom: number | null;
      distanceTo: number | null;
      paceFrom: number | null;
      paceTo: number | null;
      alerts: boolean | null;
      radius: number | null;
      preferencesUserId: string;
      preferencesActivityId: string;
      preferencesLocationId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesActivityId: string;
  activity: {
    __typename: "Activity";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePreferencesSubscription = {
  __typename: "Preferences";
  id: string;
  distanceFrom: number | null;
  distanceTo: number | null;
  paceFrom: number | null;
  paceTo: number | null;
  alerts: boolean | null;
  radius: number | null;
  preferencesUserId: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    firstName: string | null;
    lastName: string | null;
    gender: string | null;
    dateOfBirth: string | null;
    email: string | null;
    userClubId: string;
    club: {
      __typename: "Club";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userPreferencesId: string;
    preferences: {
      __typename: "Preferences";
      id: string;
      distanceFrom: number | null;
      distanceTo: number | null;
      paceFrom: number | null;
      paceTo: number | null;
      alerts: boolean | null;
      radius: number | null;
      preferencesUserId: string;
      preferencesActivityId: string;
      preferencesLocationId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesActivityId: string;
  activity: {
    __typename: "Activity";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePreferencesSubscription = {
  __typename: "Preferences";
  id: string;
  distanceFrom: number | null;
  distanceTo: number | null;
  paceFrom: number | null;
  paceTo: number | null;
  alerts: boolean | null;
  radius: number | null;
  preferencesUserId: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    firstName: string | null;
    lastName: string | null;
    gender: string | null;
    dateOfBirth: string | null;
    email: string | null;
    userClubId: string;
    club: {
      __typename: "Club";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userLocationId: string;
    location: {
      __typename: "Location";
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    userPreferencesId: string;
    preferences: {
      __typename: "Preferences";
      id: string;
      distanceFrom: number | null;
      distanceTo: number | null;
      paceFrom: number | null;
      paceTo: number | null;
      alerts: boolean | null;
      radius: number | null;
      preferencesUserId: string;
      preferencesActivityId: string;
      preferencesLocationId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesActivityId: string;
  activity: {
    __typename: "Activity";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  preferencesLocationId: string;
  location: {
    __typename: "Location";
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateActivitySubscription = {
  __typename: "Activity";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateActivitySubscription = {
  __typename: "Activity";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteActivitySubscription = {
  __typename: "Activity";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          cognitoId
          firstName
          lastName
          gender
          dateOfBirth
          email
          userClubId
          club {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          userLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          userPreferencesId
          preferences {
            __typename
            id
            distanceFrom
            distanceTo
            paceFrom
            paceTo
            alerts
            radius
            preferencesUserId
            user {
              __typename
              id
              cognitoId
              firstName
              lastName
              gender
              dateOfBirth
              email
              userClubId
              userLocationId
              userPreferencesId
              createdAt
              updatedAt
            }
            preferencesActivityId
            activity {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            preferencesLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          cognitoId
          firstName
          lastName
          gender
          dateOfBirth
          email
          userClubId
          club {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          userLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          userPreferencesId
          preferences {
            __typename
            id
            distanceFrom
            distanceTo
            paceFrom
            paceTo
            alerts
            radius
            preferencesUserId
            user {
              __typename
              id
              cognitoId
              firstName
              lastName
              gender
              dateOfBirth
              email
              userClubId
              userLocationId
              userPreferencesId
              createdAt
              updatedAt
            }
            preferencesActivityId
            activity {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            preferencesLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          cognitoId
          firstName
          lastName
          gender
          dateOfBirth
          email
          userClubId
          club {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          userLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          userPreferencesId
          preferences {
            __typename
            id
            distanceFrom
            distanceTo
            paceFrom
            paceTo
            alerts
            radius
            preferencesUserId
            user {
              __typename
              id
              cognitoId
              firstName
              lastName
              gender
              dateOfBirth
              email
              userClubId
              userLocationId
              userPreferencesId
              createdAt
              updatedAt
            }
            preferencesActivityId
            activity {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            preferencesLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateClub(
    input: CreateClubInput,
    condition?: ModelClubConditionInput
  ): Promise<CreateClubMutation> {
    const statement = `mutation CreateClub($input: CreateClubInput!, $condition: ModelClubConditionInput) {
        createClub(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateClubMutation>response.data.createClub;
  }
  async UpdateClub(
    input: UpdateClubInput,
    condition?: ModelClubConditionInput
  ): Promise<UpdateClubMutation> {
    const statement = `mutation UpdateClub($input: UpdateClubInput!, $condition: ModelClubConditionInput) {
        updateClub(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateClubMutation>response.data.updateClub;
  }
  async DeleteClub(
    input: DeleteClubInput,
    condition?: ModelClubConditionInput
  ): Promise<DeleteClubMutation> {
    const statement = `mutation DeleteClub($input: DeleteClubInput!, $condition: ModelClubConditionInput) {
        deleteClub(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteClubMutation>response.data.deleteClub;
  }
  async CreateLocation(
    input: CreateLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<CreateLocationMutation> {
    const statement = `mutation CreateLocation($input: CreateLocationInput!, $condition: ModelLocationConditionInput) {
        createLocation(input: $input, condition: $condition) {
          __typename
          id
          latitude
          longitude
          name
          address
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLocationMutation>response.data.createLocation;
  }
  async UpdateLocation(
    input: UpdateLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<UpdateLocationMutation> {
    const statement = `mutation UpdateLocation($input: UpdateLocationInput!, $condition: ModelLocationConditionInput) {
        updateLocation(input: $input, condition: $condition) {
          __typename
          id
          latitude
          longitude
          name
          address
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLocationMutation>response.data.updateLocation;
  }
  async DeleteLocation(
    input: DeleteLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<DeleteLocationMutation> {
    const statement = `mutation DeleteLocation($input: DeleteLocationInput!, $condition: ModelLocationConditionInput) {
        deleteLocation(input: $input, condition: $condition) {
          __typename
          id
          latitude
          longitude
          name
          address
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLocationMutation>response.data.deleteLocation;
  }
  async CreatePreferences(
    input: CreatePreferencesInput,
    condition?: ModelPreferencesConditionInput
  ): Promise<CreatePreferencesMutation> {
    const statement = `mutation CreatePreferences($input: CreatePreferencesInput!, $condition: ModelPreferencesConditionInput) {
        createPreferences(input: $input, condition: $condition) {
          __typename
          id
          distanceFrom
          distanceTo
          paceFrom
          paceTo
          alerts
          radius
          preferencesUserId
          user {
            __typename
            id
            cognitoId
            firstName
            lastName
            gender
            dateOfBirth
            email
            userClubId
            club {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            userLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            userPreferencesId
            preferences {
              __typename
              id
              distanceFrom
              distanceTo
              paceFrom
              paceTo
              alerts
              radius
              preferencesUserId
              preferencesActivityId
              preferencesLocationId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          preferencesActivityId
          activity {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          preferencesLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePreferencesMutation>response.data.createPreferences;
  }
  async UpdatePreferences(
    input: UpdatePreferencesInput,
    condition?: ModelPreferencesConditionInput
  ): Promise<UpdatePreferencesMutation> {
    const statement = `mutation UpdatePreferences($input: UpdatePreferencesInput!, $condition: ModelPreferencesConditionInput) {
        updatePreferences(input: $input, condition: $condition) {
          __typename
          id
          distanceFrom
          distanceTo
          paceFrom
          paceTo
          alerts
          radius
          preferencesUserId
          user {
            __typename
            id
            cognitoId
            firstName
            lastName
            gender
            dateOfBirth
            email
            userClubId
            club {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            userLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            userPreferencesId
            preferences {
              __typename
              id
              distanceFrom
              distanceTo
              paceFrom
              paceTo
              alerts
              radius
              preferencesUserId
              preferencesActivityId
              preferencesLocationId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          preferencesActivityId
          activity {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          preferencesLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePreferencesMutation>response.data.updatePreferences;
  }
  async DeletePreferences(
    input: DeletePreferencesInput,
    condition?: ModelPreferencesConditionInput
  ): Promise<DeletePreferencesMutation> {
    const statement = `mutation DeletePreferences($input: DeletePreferencesInput!, $condition: ModelPreferencesConditionInput) {
        deletePreferences(input: $input, condition: $condition) {
          __typename
          id
          distanceFrom
          distanceTo
          paceFrom
          paceTo
          alerts
          radius
          preferencesUserId
          user {
            __typename
            id
            cognitoId
            firstName
            lastName
            gender
            dateOfBirth
            email
            userClubId
            club {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            userLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            userPreferencesId
            preferences {
              __typename
              id
              distanceFrom
              distanceTo
              paceFrom
              paceTo
              alerts
              radius
              preferencesUserId
              preferencesActivityId
              preferencesLocationId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          preferencesActivityId
          activity {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          preferencesLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePreferencesMutation>response.data.deletePreferences;
  }
  async CreateActivity(
    input: CreateActivityInput,
    condition?: ModelActivityConditionInput
  ): Promise<CreateActivityMutation> {
    const statement = `mutation CreateActivity($input: CreateActivityInput!, $condition: ModelActivityConditionInput) {
        createActivity(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateActivityMutation>response.data.createActivity;
  }
  async UpdateActivity(
    input: UpdateActivityInput,
    condition?: ModelActivityConditionInput
  ): Promise<UpdateActivityMutation> {
    const statement = `mutation UpdateActivity($input: UpdateActivityInput!, $condition: ModelActivityConditionInput) {
        updateActivity(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateActivityMutation>response.data.updateActivity;
  }
  async DeleteActivity(
    input: DeleteActivityInput,
    condition?: ModelActivityConditionInput
  ): Promise<DeleteActivityMutation> {
    const statement = `mutation DeleteActivity($input: DeleteActivityInput!, $condition: ModelActivityConditionInput) {
        deleteActivity(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteActivityMutation>response.data.deleteActivity;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          cognitoId
          firstName
          lastName
          gender
          dateOfBirth
          email
          userClubId
          club {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          userLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          userPreferencesId
          preferences {
            __typename
            id
            distanceFrom
            distanceTo
            paceFrom
            paceTo
            alerts
            radius
            preferencesUserId
            user {
              __typename
              id
              cognitoId
              firstName
              lastName
              gender
              dateOfBirth
              email
              userClubId
              userLocationId
              userPreferencesId
              createdAt
              updatedAt
            }
            preferencesActivityId
            activity {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            preferencesLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            cognitoId
            firstName
            lastName
            gender
            dateOfBirth
            email
            userClubId
            club {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            userLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            userPreferencesId
            preferences {
              __typename
              id
              distanceFrom
              distanceTo
              paceFrom
              paceTo
              alerts
              radius
              preferencesUserId
              preferencesActivityId
              preferencesLocationId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetClub(id: string): Promise<GetClubQuery> {
    const statement = `query GetClub($id: ID!) {
        getClub(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetClubQuery>response.data.getClub;
  }
  async ListClubs(
    filter?: ModelClubFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListClubsQuery> {
    const statement = `query ListClubs($filter: ModelClubFilterInput, $limit: Int, $nextToken: String) {
        listClubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListClubsQuery>response.data.listClubs;
  }
  async GetLocation(id: string): Promise<GetLocationQuery> {
    const statement = `query GetLocation($id: ID!) {
        getLocation(id: $id) {
          __typename
          id
          latitude
          longitude
          name
          address
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLocationQuery>response.data.getLocation;
  }
  async ListLocations(
    filter?: ModelLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLocationsQuery> {
    const statement = `query ListLocations($filter: ModelLocationFilterInput, $limit: Int, $nextToken: String) {
        listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLocationsQuery>response.data.listLocations;
  }
  async GetPreferences(id: string): Promise<GetPreferencesQuery> {
    const statement = `query GetPreferences($id: ID!) {
        getPreferences(id: $id) {
          __typename
          id
          distanceFrom
          distanceTo
          paceFrom
          paceTo
          alerts
          radius
          preferencesUserId
          user {
            __typename
            id
            cognitoId
            firstName
            lastName
            gender
            dateOfBirth
            email
            userClubId
            club {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            userLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            userPreferencesId
            preferences {
              __typename
              id
              distanceFrom
              distanceTo
              paceFrom
              paceTo
              alerts
              radius
              preferencesUserId
              preferencesActivityId
              preferencesLocationId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          preferencesActivityId
          activity {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          preferencesLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPreferencesQuery>response.data.getPreferences;
  }
  async ListPreferencess(
    filter?: ModelPreferencesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPreferencessQuery> {
    const statement = `query ListPreferencess($filter: ModelPreferencesFilterInput, $limit: Int, $nextToken: String) {
        listPreferencess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            distanceFrom
            distanceTo
            paceFrom
            paceTo
            alerts
            radius
            preferencesUserId
            user {
              __typename
              id
              cognitoId
              firstName
              lastName
              gender
              dateOfBirth
              email
              userClubId
              userLocationId
              userPreferencesId
              createdAt
              updatedAt
            }
            preferencesActivityId
            activity {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            preferencesLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPreferencessQuery>response.data.listPreferencess;
  }
  async GetActivity(id: string): Promise<GetActivityQuery> {
    const statement = `query GetActivity($id: ID!) {
        getActivity(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetActivityQuery>response.data.getActivity;
  }
  async ListActivitys(
    filter?: ModelActivityFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActivitysQuery> {
    const statement = `query ListActivitys($filter: ModelActivityFilterInput, $limit: Int, $nextToken: String) {
        listActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListActivitysQuery>response.data.listActivitys;
  }
  OnCreateUserListener: Observable<
    SubscriptionResponse<OnCreateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          cognitoId
          firstName
          lastName
          gender
          dateOfBirth
          email
          userClubId
          club {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          userLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          userPreferencesId
          preferences {
            __typename
            id
            distanceFrom
            distanceTo
            paceFrom
            paceTo
            alerts
            radius
            preferencesUserId
            user {
              __typename
              id
              cognitoId
              firstName
              lastName
              gender
              dateOfBirth
              email
              userClubId
              userLocationId
              userPreferencesId
              createdAt
              updatedAt
            }
            preferencesActivityId
            activity {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            preferencesLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<OnUpdateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          cognitoId
          firstName
          lastName
          gender
          dateOfBirth
          email
          userClubId
          club {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          userLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          userPreferencesId
          preferences {
            __typename
            id
            distanceFrom
            distanceTo
            paceFrom
            paceTo
            alerts
            radius
            preferencesUserId
            user {
              __typename
              id
              cognitoId
              firstName
              lastName
              gender
              dateOfBirth
              email
              userClubId
              userLocationId
              userPreferencesId
              createdAt
              updatedAt
            }
            preferencesActivityId
            activity {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            preferencesLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<OnDeleteUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          cognitoId
          firstName
          lastName
          gender
          dateOfBirth
          email
          userClubId
          club {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          userLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          userPreferencesId
          preferences {
            __typename
            id
            distanceFrom
            distanceTo
            paceFrom
            paceTo
            alerts
            radius
            preferencesUserId
            user {
              __typename
              id
              cognitoId
              firstName
              lastName
              gender
              dateOfBirth
              email
              userClubId
              userLocationId
              userPreferencesId
              createdAt
              updatedAt
            }
            preferencesActivityId
            activity {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            preferencesLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;

  OnCreateClubListener: Observable<
    SubscriptionResponse<OnCreateClubSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateClub {
        onCreateClub {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateClubSubscription>>;

  OnUpdateClubListener: Observable<
    SubscriptionResponse<OnUpdateClubSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateClub {
        onUpdateClub {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateClubSubscription>>;

  OnDeleteClubListener: Observable<
    SubscriptionResponse<OnDeleteClubSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteClub {
        onDeleteClub {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteClubSubscription>>;

  OnCreateLocationListener: Observable<
    SubscriptionResponse<OnCreateLocationSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLocation {
        onCreateLocation {
          __typename
          id
          latitude
          longitude
          name
          address
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateLocationSubscription>>;

  OnUpdateLocationListener: Observable<
    SubscriptionResponse<OnUpdateLocationSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLocation {
        onUpdateLocation {
          __typename
          id
          latitude
          longitude
          name
          address
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateLocationSubscription>>;

  OnDeleteLocationListener: Observable<
    SubscriptionResponse<OnDeleteLocationSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLocation {
        onDeleteLocation {
          __typename
          id
          latitude
          longitude
          name
          address
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteLocationSubscription>>;

  OnCreatePreferencesListener: Observable<
    SubscriptionResponse<OnCreatePreferencesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePreferences {
        onCreatePreferences {
          __typename
          id
          distanceFrom
          distanceTo
          paceFrom
          paceTo
          alerts
          radius
          preferencesUserId
          user {
            __typename
            id
            cognitoId
            firstName
            lastName
            gender
            dateOfBirth
            email
            userClubId
            club {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            userLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            userPreferencesId
            preferences {
              __typename
              id
              distanceFrom
              distanceTo
              paceFrom
              paceTo
              alerts
              radius
              preferencesUserId
              preferencesActivityId
              preferencesLocationId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          preferencesActivityId
          activity {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          preferencesLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePreferencesSubscription>>;

  OnUpdatePreferencesListener: Observable<
    SubscriptionResponse<OnUpdatePreferencesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePreferences {
        onUpdatePreferences {
          __typename
          id
          distanceFrom
          distanceTo
          paceFrom
          paceTo
          alerts
          radius
          preferencesUserId
          user {
            __typename
            id
            cognitoId
            firstName
            lastName
            gender
            dateOfBirth
            email
            userClubId
            club {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            userLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            userPreferencesId
            preferences {
              __typename
              id
              distanceFrom
              distanceTo
              paceFrom
              paceTo
              alerts
              radius
              preferencesUserId
              preferencesActivityId
              preferencesLocationId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          preferencesActivityId
          activity {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          preferencesLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePreferencesSubscription>>;

  OnDeletePreferencesListener: Observable<
    SubscriptionResponse<OnDeletePreferencesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePreferences {
        onDeletePreferences {
          __typename
          id
          distanceFrom
          distanceTo
          paceFrom
          paceTo
          alerts
          radius
          preferencesUserId
          user {
            __typename
            id
            cognitoId
            firstName
            lastName
            gender
            dateOfBirth
            email
            userClubId
            club {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            userLocationId
            location {
              __typename
              id
              latitude
              longitude
              name
              address
              createdAt
              updatedAt
            }
            userPreferencesId
            preferences {
              __typename
              id
              distanceFrom
              distanceTo
              paceFrom
              paceTo
              alerts
              radius
              preferencesUserId
              preferencesActivityId
              preferencesLocationId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          preferencesActivityId
          activity {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          preferencesLocationId
          location {
            __typename
            id
            latitude
            longitude
            name
            address
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePreferencesSubscription>>;

  OnCreateActivityListener: Observable<
    SubscriptionResponse<OnCreateActivitySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateActivity {
        onCreateActivity {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateActivitySubscription>>;

  OnUpdateActivityListener: Observable<
    SubscriptionResponse<OnUpdateActivitySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateActivity {
        onUpdateActivity {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateActivitySubscription>>;

  OnDeleteActivityListener: Observable<
    SubscriptionResponse<OnDeleteActivitySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteActivity {
        onDeleteActivity {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteActivitySubscription>>;
}
