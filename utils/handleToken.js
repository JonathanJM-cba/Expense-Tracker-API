const jwt = require("jsonwebtoken");
const accessTokenKey = process.env.ACCESS_TOKEN_KEY;

const generateToken = async (user) => {
  return await jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.name,
    },
    accessTokenKey,
    {
      expiresIn: "1h",
    }
  );
};

module.exports = { generateToken };
