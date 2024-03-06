// pages/api/text.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).json({ randomValue: Math.floor(Math.random() * 10) })
}
