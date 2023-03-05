import { getTrack } from "../../lib/spotify";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_, res) => {
  try {
    const track = await getTrack();
    res.status(200).json(track);
  } catch (err) {
    res.status(500).json(err);
  }
};
