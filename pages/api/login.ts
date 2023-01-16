import { cookies } from 'next/headers';

export default function handler(req: any, res: any) {
  
  if (req.method == "POST") {
    const { username, password } = req.body;
    if (username === "admin" && password === "123") {
      res.status(200).json(true);
    } else {
      res.status(403).json(false);
    }
  }
  else if(req.method == "GET"){
    const cook = cookies();
    console.log(cook);
    res.status(200).json(true)
  }
}
