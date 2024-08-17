const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./project/dist")));
const mainEndpoint = (req, res) => {
  res.sendFile(path.join(__dirname, "./project/dist", "index.html"));
}
app.get("*", mainEndpoint);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
