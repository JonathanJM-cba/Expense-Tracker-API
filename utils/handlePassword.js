const bcrypt = require("bcryptjs");
const saltRound = 10;

/**
 * Función para encriptar contraseña
 * @param {*} plainPassword - Pasar contraseña del usuario
 * @returns - Retorna la contraseña encriptada
 */
const hashPassword = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, saltRound);
};

module.exports = { hashPassword };
