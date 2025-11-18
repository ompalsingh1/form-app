const { log } = require("console");
const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../models/users");

// router.get('/',(req,res) =>{
//     res.send("home");
// });

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.post("/submit", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({message:"created",user})
    
  } catch (error) {
    res.status(500).json({ message: "error.message",error });
  }
});

router.get("/users", async (req, res) => {
   try {
    // const { id } = req.params;
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// router.get("/submit", async (req, res) => {
//   res.send("user created successfully");
//     res.status(200).json(user);
// });

// router.post("/submit", async (req, res) => {
//   try {
//     console.log(req.body);
//     res.send(req.body.name);
//   } catch (error) {
//     res.status(500).json({ message: "error.message" });
//   }
// });

module.exports = router;
