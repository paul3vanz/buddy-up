import { ErrorCode } from "../enums/error-code.enum";

export enum LoadingStates {
  INIT = "INIT",
  LOADING = "LOADING",
  LOADED = "LOADED",
}

export interface ErrorState {
  error: string | ErrorCode;
}

export type LoadingState = LoadingStates | ErrorState;

export function getError(callState: LoadingState): ErrorCode | string | null {
  if ((callState as ErrorState).error !== undefined) {
    return (callState as ErrorState).error;
  }

  return null;
}
