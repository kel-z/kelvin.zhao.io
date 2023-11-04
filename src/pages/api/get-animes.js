import { getAnimeList } from "../../lib/mal";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { username, status } = req.body;
      const animeList = await getAnimeList(username, status);
      res.status(200).json(animeList);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
