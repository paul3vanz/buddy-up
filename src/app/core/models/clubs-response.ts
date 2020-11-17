export interface ClubsResponse {
  Clubs: [
    {
      ClubId: string;
      ClubName: string;
      HomeCountry: string;
      Locality: string;
      Region: string;
    }
  ];
  ResponseReference: string;
  ResponseStatus: string;
}
