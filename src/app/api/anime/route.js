import { getAnimeList } from "@/lib/mal";

export async function POST(req) {
  const { username, status } = await req.json();
  const animeList = await getAnimeList(username, status);
  return Response.json(animeList);
}
