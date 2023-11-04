import { Anime } from "./types";

const CLIENT_ID = process.env.MAL_CLIENT_ID;

const MAL_GET_LIST_URL =
  "https://api.myanimelist.net/v2/users/{}/animelist?limit=1000";

export const getAnimeList: (
  user: string,
  status?: string
) => Promise<Anime[]> = async (user, status?) => {
  if (!user) {
    throw new Error("User is empty");
  }

  let url = MAL_GET_LIST_URL.replace("{}", user.trim());
  if (status && status !== "all") {
    url += `&status=${status}`;
  }

  const response: any = await fetch(url, {
    headers: {
      "X-MAL-CLIENT-ID": CLIENT_ID,
    },
  });

  return response.json().then((data: any) => {
    const res: Anime[] = [];
    for (const node of data.data) {
      const anime: Anime = {
        ...node.node,
      };
      res.push(anime);
    }
    return res;
  });
};
