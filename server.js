const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static("public"));

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    // Here, you can save the user data to a database or perform other actions.

    // Send a response back to the client (e.g., a success message)
    res.json({ message: "Signup successful" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
