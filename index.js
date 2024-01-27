const express = require("express");

// init app and middleware
const app = express();

const PORT = process.env.PORT || 3000;

// routes
app.get("/books", (req, res) => {
    res.json({ message: "Welcome to my API" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
