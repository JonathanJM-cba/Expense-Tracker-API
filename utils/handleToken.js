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

/**
 * Función para verificar token del usuario
 * @param {String} token - Pasar el token del usuario
 * @returns {Promise} - Retorna una promesa
 */
const verifyToken = async (token) => {
  return await jwt.verify(token, accessTokenKey);
};

module.exports = { generateToken, verifyToken };
