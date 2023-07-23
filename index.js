const express = require("express");
const app = express();
const cors = require("cors");

// PORT
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api", require("./routes/monitioring.route"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
