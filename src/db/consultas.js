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
    //...
}

const addPlayer = async ({ jugador, teamID }) => {
    //...
}

module.exports = { getTeams, addTeam, getPlayers, addPlayer }