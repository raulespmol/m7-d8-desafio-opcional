require('dotenv').config()

const secretKey = process.env.SECRET

/* 
Absolutamente este no es el metodo para validar credenciales
pero lo haré de esta forma para fines practicos de este desafio
y no tener que insertar las credenciales de un usuario en la Base de Datos
*/
const verificarCredenciales = (credenciales) => {
  const {username, password} = credenciales
  return username === "admin" && password === "1234"
}

module.exports = { 
  secretKey,
  verificarCredenciales
}