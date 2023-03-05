import { Dispatch, SetStateAction } from "react";

export type Track = {
  name: string;
  artist: string;
  href: string;
  is_playing: boolean;
};

export type SetTracksState = Dispatch<SetStateAction<Track>>;
