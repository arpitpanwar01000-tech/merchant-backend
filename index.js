const express = require("express");
const app = express();

// simple test API
app.get("/api/merchant/hello", (req, res) => {
  res.json({ message: "hello user" });
});

// Render / server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
