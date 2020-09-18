exports.emailBienvenidaUsuario = uid => {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      * {
        font-family: Arial, Helvetica, sans-serif;
      }
      body{
        padding:20px;
      }
      .btn-itoour {
        background: #753183;
        color: white;
        padding: 20px;
        font-weight: bold;
        width:150px;
        font-size: 16px;
        border-radius: 15px;
        border: 0;
        margin-left:calc(50% - 75px);
      }
    </style>
    <title>Document</title>
  </head>
  <body>
    <h1>Bienvenido</h1>

    <p>
      Gracias por integrarte a esta comunidad
    </p>
    <p>
      Si recibiste este correo es porque estas a punto de activar tu cuenta y
      ser parte de itoour.
    </p>
    <p>Continua activando tu cuenta</p>
    <div>
      <a class="btn-itoour" href="http://itoour.com/activar/${uid}">
        Ir a mi cuenta
      </a>
    </div>
    <p>
      Recuerda seguirnos en
      nuestra web WWW.ITOOUR.COM
    </p>

    <p>O en el siguiente enlace</p>
    <p>
      <a href="https://itoour.com/registrocliente"
        >https://itoour.com/registrocliente</a
      >
    </p>
    <p>Disfruta del paseo.</p>
  </body>
</html>

    `
}