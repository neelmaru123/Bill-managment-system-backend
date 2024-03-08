let UserName = "admin"
let Password = "admin"

const handleLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .send({ message: "Username and Password are required" });
  }

  if (username != UserName) {
    return res.status(401).json({ message: "User not found" });
  }

  if (username == UserName && password == Password) {
      res.json({ success: true, message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Incorrect Password" });
  }

};

const changePassword = async (req,res) => {
  const { username, password } = req.body;

  if(username != UserName){
    return res
      .send({ message: "Incorrect Username" });
  }

  Password = password;
};

module.exports = handleLogin;
