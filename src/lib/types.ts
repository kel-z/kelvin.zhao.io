import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export type Experience = {
  company: string;
  title: string;
  date: string;
  location: string;
  description: JSX.Element;
  skills: string[];
  image: StaticImageData;
  href: string;
};

export type Track = {
  name: string;
  artist: string;
  href: string;
  is_playing: boolean;
};

export type Anime = {
  id: number;
  title: string;
  main_picture?: {
    large?: string;
    medium: string;
  };
  alternative_titles?: {
    synonyms?: string[];
    en?: string;
    ja?: string;
  };
};

export type SetTracksState = Dispatch<SetStateAction<Track>>;
