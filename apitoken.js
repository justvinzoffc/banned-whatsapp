export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { phone } = req.body;
  const idInstance = "7105273056"; // Ganti ID Instance kamu
  const apiToken = "6eca424994d64742a4b17f77dfc41ff039ab15a084c54c89bc"; // Ganti token kamu

  const url = `https://api.green-api.com/waInstance${idInstance}/setPairingCode/${apiToken}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone })
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
