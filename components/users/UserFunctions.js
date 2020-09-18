// const admin = require("firebase-admin");
const { Email } = require("../../Utils/EmailHelper");
const { emailBienvenidaUsuario } = require("../../Utils/PlantillaEmails");

class UsuarioFunctions {
  emailBienvenidaUsuario(nombres, email, uid) {
    const to = email;
    const from = "robot@itoour.com";

    const body = emailBienvenidaUsuario(uid);
    const objEmail = new Email();

    return objEmail.sendEmail(from, to, "", "Bienvenido a itoour!", body);
  }
}

exports.UsuarioFunctions = UsuarioFunctions;