import { NextApiRequest, NextApiResponse } from "next";
import { signInWithCredentials } from "@/actions/sign-in";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  try {
    const result = await signInWithCredentials(email, password);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ error: "Failed to sign in" });
  }
}