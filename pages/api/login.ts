import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse ) {
  
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (username === "admin" && password === "123") {
      res.status(200).json(true);
    } else {
      res.status(403).json(false);
    }
  }
  else if(req.method === "GET") {
    res.status(200).json(true);
  }
}
