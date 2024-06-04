import { getTrack } from "lib/spotify";

export const dynamic = "force-dynamic";

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     try {
//       const track = await getTrack();
//       res.status(200).json(track);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(400).json({ error: "Invalid request method" });
//   }
// }

export async function GET() {
  const track = await getTrack();
  return Response.json(track);
}
