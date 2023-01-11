export default function handler(req:any, res:any) {
  if (req.method !== "POST") {
    res.status(404).json({
      message: "Not Found",
    })
  };
  const { username, password } = req.body;
  if (username === "admin" && password === "123") {
    res.status(200).json(true);
  } else {
    res.status(404).json(false);
  }
}
