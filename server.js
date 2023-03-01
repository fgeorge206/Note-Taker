// Required packages
const express = require("express");
const allRoutes = require("./controllers");

// Global Variables
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(allRoutes);

// Server listener
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});