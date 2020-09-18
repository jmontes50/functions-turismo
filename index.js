const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
const usuarioController = require("./components/users/UserController");
const { Email } = require("./Utils/EmailHelper");
const cors = require("cors")({ origin: true });

admin.initializeApp();

// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.addAdminRole = functions.https.onCall((uid) => {
  return admin
    .auth()
    .setCustomUserClaims(uid, {
      admin: true,
    })

    .then((data) => {
      return {
        message: `es un admin.`,
      };
    })
    .catch((err) => {
      return err;
    });
});

exports.addClientRole = functions.https.onCall((uid) => {
  return admin
    .auth()
    .setCustomUserClaims(uid, {
      cliente: true,
    })

    .then(() => {
      return {
        message: `Activado como cliente`,
      };
    })
    .catch((err) => {
      return err;
    });
});

exports.ActivateUser = functions.https.onCall((uid, context) => {
  return admin
    .auth()
    .getUser(uid)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        active: true,
      });
    })
    .then(() => {
      return {
        success: true,
        message: `esta activo.`,
      };
    })
    .catch((err) => {
      return err;
    });
});

exports.HacerCompra = functions.https.onCall((compra) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${compra.token.id}`,
      "Content-Type": "application/json",
    },
  };

  const bodyParameters = {
    amount: compra.precio,
    currency_code: compra.moneda,
    email: compra.email,
    source_id: "sk_test_2958d8ed40fb79f5",
  };
  // functions.logger.log("config", config);
  // functions.logger.log("config", bodyParameters);
  axios
    .post("https://api.culqi.com/v2/charges", bodyParameters, config)
    .then((data) => {
      // functions.logger.log("hacercompra:", data);
      return data;
    })
    .catch((err) => err);
});

exports.DeactivateUserByAdmin = functions.https.onCall((uid, context) => {
  return admin
    .auth()
    .getUser(uid)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        blocked: true,
      });
    })
    .then((data) => {
      return {
        message: `${data} esta bloqueado.`,
      };
    })
    .catch((err) => {
      return err;
    });
});

exports.correoUsuario = functions.auth
  .user()
  .onCreate(usuarioController.usuarioCreadoController);

exports.enviarEmail = functions.https.onCall((email) => {

    const objEmail = new Email();
    let body = `<p>${email.subject}</p>
                <p>${email.email}</p>
                <p>${email.name}</p>
                <p>${email.message}</p>`;
    return objEmail.sendEmail(from, to, "", "contacto", body);

});
