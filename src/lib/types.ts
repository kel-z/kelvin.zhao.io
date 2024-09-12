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

export type Project = {
  order: number;
  title: string;
  src: string;
  description: JSX.Element;
  image: StaticImageData;
  links: {
    img?: string;
    src: string;
    text: string;
  }[];
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

export type CourseForm = {
  session: string;
  department: string;
  number: string;
  section: string;
  email: string;
  restricted: boolean;
};

type Value<T> = {
  S: T;
};
export type CourseEntry = {
  name: Value<string>;
  restricted: Value<string>;
  department: Value<string>;
  description: Value<string>;
  section: Value<string>;
  number: Value<string>;
  session: Value<string>;
};

export type TrackingResponse = {
  statusCode: number;
  body: string;
};
