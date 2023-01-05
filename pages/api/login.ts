export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(404).json({
      message: "Not Found",
    });
  }
  const { username, password } = req.body;
  if (username === "admin" && password === "123") {
    res.status(200).json(true);
  } else {
    res.status(403).json(false);
  }
}
