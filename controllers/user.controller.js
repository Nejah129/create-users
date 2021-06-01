const User = require("../model/User");
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");
exports.register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const newUser = new User({
      name,
      email,
      password,
      phone,
    });
    const searchRes = await User.findOne({ email });
    if (searchRes) return res.status(401).json({ msg: "User Arledy exiest" });
    const salt = await bc.genSalt(10);
    const hash = await bc.hash(password, salt);
    newUser.password = hash;
    newUser.save();
    const payload = {
      id: newUser._id,
    };
    const token = jwt.sign(payload, secret);
    res.send({
      token,
      User: {
        id: newUser._id,
        name: newUser.name,
        phone: newUser.phone,
        email: newUser.email,
      },
    });

    //res.send(newUser);
  } catch (error) {
    console.log(error.message);
    res.satuts(500).json({ errors: error.message });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser)
      return res.status(404).json({ msg: "email or password is wrong " });
    const isMatch = await bc.compare(password, validUser.password);
    if (!isMatch)
      return res.status(404).json({ msg: "email or password is wrong " });
    const payload = {
      id: validUser._id,
    };
    const token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: validUser._id,
        name: validUser.name,
        phone: validUser.phone,
      },
    })
    // res.send({msg:'ok'})
  } 
  catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
exports.authUser=(req,res)=>{
  res.send(req.user)
}
