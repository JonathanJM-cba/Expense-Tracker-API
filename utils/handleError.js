/**
 * Función personalizada para el manejo de errores http
 * @param {Response} res - Pasar la respuesta http
 * @param {String} message - Pasar el mensaje de error
 * @param {Integer} code - Pasar el código de error http
 */
const handleHttpError = (res, message, code = 403) => {
  res.status(code).json({ error: message });
};

module.exports = handleHttpError;
