export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { phone } = req.body;
  const idInstance = "7105273056"; // ganti ID kamu
  const apiToken = "6eca424994d64742a4b17f77dfc41ff039ab15a084c54c89bc"; // ganti token kamu

  const url = `https://api.green-api.com/waInstance${idInstance}/setPairingCode/${apiToken}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });

    // kadang respons bukan JSON (contohnya error 404 atau HTML)
    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { error: "Invalid JSON response", raw: text };
    }

    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
