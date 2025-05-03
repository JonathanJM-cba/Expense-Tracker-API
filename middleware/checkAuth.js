const { userModel } = require("../models");
const handleHttpError = require("../utils/handleError");
const { verifyToken } = require("../utils/handleToken");

const checkAuth = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer "))
      return handleHttpError(res, "ERROR_NO_TOKEN_HEADER", 400);

    //Se obtiene el token
    const token = authorizationHeader.split(" ").pop();

    if (!token) return handleHttpError(res, "ERROR_NO_TOKEN_PROVIDED", 400);

    //Se verifica la válidez del token
    const checkToken = await verifyToken(token);

    if (!checkToken) return handleHttpError(res, "ERROR_TOKEN_INVALID", 401);

    const user = await userModel.findByPk(token.id);

    if (!user) return handleHttpError(res, "ERROR_USER_NOT_FOUND", 404);

    req.user = {
      id: token.id,
      name: token.name,
      email: token.email,
    };
    next();
  } catch (error) {
    console.log("Error al intentar válidar token: ", error);
    handleHttpError(res, "ERROR_CHECK_AUTH", 500);
  }
};

module.exports = checkAuth;
