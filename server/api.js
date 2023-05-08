const express = require("express");
const app = express();

app.use(express.json());

//Endpoint for user login
app.post("/login", (req, res) => {
  const { username, password } = req.body;


  //write on diffrent approach with http status code
  const isValed = true;

  if (isValed) {
    res.json({
      succes: true,
      message: "Login successfully. Welcome!",
    });
  } else {
    res.json({
      succes: false,
      message: "Login Failed",
    });
  }
});

// Endpoint for user registration
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  const isTaken = false;

  if (isTaken) {
    res.json({
      succes: false,
      message: "Username already taken. Please provide another username",
    });
  } else {
    res.json({
      success: true,
      message: "Registration successfull. Welcome!",
    });
  }
});
