import { NextApiRequest, NextApiResponse } from "next";
import { signOutFunc } from "@/actions/sign-out";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await signOutFunc();
    res.status(200).json({ message: "Signed out successfully" });
  } catch (error) {
    console.error("Error signing out:", error);
    res.status(500).json({ error: "Failed to sign out" });
  }
}