const bcrypt = require("bcryptjs");
const saltRound = 10;

/**
 * Función para encriptar contraseña
 * @param {String} plainPassword - Pasar contraseña del usuario
 * @returns - Retorna la contraseña encriptada
 */
const hashPassword = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, saltRound);
};

/**
 * Función para verificar contraseña del usuario
 * @param {String} plainPassword - Pasar la contraseña en texto plano
 * @param {String} passwordHash - Pasar la contraseña encriptada
 * @returns
 */
const verifyPassword = async (plainPassword, passwordHash) => {
  return await bcrypt.compare(plainPassword, passwordHash);
};

module.exports = { hashPassword, verifyPassword };
