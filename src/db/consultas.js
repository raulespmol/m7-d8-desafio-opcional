const database = require('./config')

const getTeams = async () => {
    const consulta = "SELECT * FROM equipos"
    const {rows: equipos, rowCount} = await database.query(consulta)

    if(!rowCount){
        throw {
            code: 404,
            message: "Aún no hay equipos registrados"
        }
    }

    return equipos
}

const getPlayers = async (teamID) => {
    //...
}

const addTeam = async (equipo) => {
    const consulta = "INSERT INTO equipos VALUES (DEFAULT, $1) RETURNING *"
    const values = [equipo.name]

    const {rows: nuevoEquipo, rowCount} = await database.query(consulta, values)

    if(!rowCount){
        throw {
            code: 400,
            message: "No se pudo agregar el equipo"
        }
    }

    return nuevoEquipo
}

const addPlayer = async ({ jugador, teamID }) => {
    //...
}

module.exports = { getTeams, addTeam, getPlayers, addPlayer }