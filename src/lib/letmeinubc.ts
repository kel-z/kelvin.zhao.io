import { TrackingResponse } from "./types";

export const createTracking: (
  course: string,
  email: string,
  restricted: boolean
) => Promise<TrackingResponse> = (
  course: string,
  email: string,
  restricted: boolean
) => {
  return fetch("https://qica1j5krg.execute-api.us-west-2.amazonaws.com/prod", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      courseString: course,
      includeRestricted: restricted
    })
  }).then((res) => res.json()) as Promise<TrackingResponse>;
};
