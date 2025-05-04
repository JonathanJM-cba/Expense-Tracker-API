const { userModel } = require("../models");
const handleHttpError = require("../utils/handleError");
const { verifyToken } = require("../utils/handleToken");

const checkAuth = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  try {
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer "))
      return handleHttpError(res, "ERROR_NO_TOKEN_HEADER", 400);

    //Se obtiene el token
    const token = authorizationHeader.split(" ").pop();

    if (!token) return handleHttpError(res, "ERROR_NO_TOKEN_PROVIDED", 400);

    //Se verifica la válidez del token
    const tokenData = await verifyToken(token);

    if (!tokenData) return handleHttpError(res, "ERROR_TOKEN_INVALID", 401);

    const user = await userModel.findByPk(tokenData.id);

    if (!user) return handleHttpError(res, "ERROR_USER_NOT_FOUND", 404);

    req.user = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    next();
  } catch (error) {
    console.log("Error al intentar válidar token: ", error);
    handleHttpError(res, "ERROR_CHECK_AUTH", 500);
  }
};

module.exports = checkAuth;
