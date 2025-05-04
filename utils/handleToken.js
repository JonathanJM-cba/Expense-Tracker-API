const jwt = require("jsonwebtoken");
const accessTokenKey = process.env.ACCESS_TOKEN_KEY;

const generateToken = async (user) => {
  return await jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
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
  try {
    return await jwt.verify(token, accessTokenKey);
  } catch (error) {
    console.log("Error al verificar token: ", error);
  }
};

module.exports = { generateToken, verifyToken };
