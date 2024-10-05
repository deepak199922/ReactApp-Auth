const express = require("express");
const app = express();
const PORT = 8000;
const connectDB = require("./databaseConnections/dbConnection");
const User = require("./databaseConnections/user");

connectDB();

// dealing with JSON's require a middleware
app.use(express.json());

// API call for Registration
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    console.log(user);
    console.log("username: ", username, "password: ", password);
    await user.save();
    res.status(201).json({ message: "Registration Successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Registration Failed" });
  }
});

// API call for Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid Username or Password" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid Username or Password" });
    }
    res.status(201).json({ message: "Login Successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Login Failed" });
  }
});

app.listen(PORT, () => {
  console.log("listening on PORT:", PORT);
});
