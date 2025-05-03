const { userModel } = require("../models");
const handleHttpError = require("../utils/handleError");
const { hashPassword, verifyPassword } = require("../utils/handlePassword");
const { generateToken } = require("../utils/handleToken");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //Se verifica si existe un usuario con el email recibido
    const user = await userModel.findOne({
      where: { email: email },
    });

    if (user) return handleHttpError(res, "ERROR_USER_EMAIL_EXIST", 400);

    //Caso contrario se encripta la contraseña del usuario y se procede a crearlo
    const passwordHash = await hashPassword(password);

    const userData = {
      name: name,
      email: email,
      password: passwordHash,
    };

    const newUser = await userModel.create(userData);
    res.status(201).json({
      message: "Usuario creado con éxito",
      data: { name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    console.log("Error al intentar crear el usuario: ", error);
    handleHttpError(res, "ERROR_CREATE_USER", 500);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //Se verifica si existe el usuario
    const user = await userModel.findOne({
      where: { email: email },
    });

    if (!user) return handleHttpError(res, "ERROR_USER_NOT_FOUND", 404);

    //Se verifica la contraseña
    const checkPassword = await verifyPassword(password, user.password);

    if (!checkPassword)
      return handleHttpError(res, "ERROR_PASSWORD_INVALID", 400);

    //Caso contrario se genera access token
    const token = await generateToken(user);

    res
      .status(200)
      .json({ message: "Usuario logueado con éxito", token: token });
  } catch (error) {
    console.log("Error al intentar loguearse el usuario: ", error);
    handleHttpError(res, "ERROR_LOGIN_USER", 500);
  }
};

module.exports = { createUser, loginUser };
