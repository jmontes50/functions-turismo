const {UsuarioFunctions} =  require('./UserFunctions');

exports.usuarioCreadoController = usuario => {
    const userFunctions = new UsuarioFunctions();

    return userFunctions.emailBienvenidaUsuario(usuario.displayName, usuario.email, usuario.uid).then(()=>{
        return {
            uid:usuario.uid,
            message: `ready user`
          }
    }).catch(error => {
        console.error(`Error en mandar el correo => ${error}`)
    })
}