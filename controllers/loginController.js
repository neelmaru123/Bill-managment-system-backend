

const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res
      .send({ message: "Username and Password are required" });
  }

  if (username != "admin") {
    return res.status(401).json({ message: "User not found" });
  }

  if (username == "admin" && password == "admin") {
      res.json({ success: true, message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Incorrect Password" });
  }
};

module.exports = handleLogin;
