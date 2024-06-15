const database = require('./config')

const getTeams = async () => {
    //...
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