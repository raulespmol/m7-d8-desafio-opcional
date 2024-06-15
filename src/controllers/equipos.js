const { getTeams, addTeam } = require('../db/consultas')

const obtenerEquipos = async (req, res) => {
    try {
        const equipos = await getTeams()
        res.json(equipos)
    } catch (error) {
        res.status(error.code).send(error.message)
    }
}

const agregarEquipo = async (req, res) => {
    const equipo = req.body
    await addTeam(equipo)
    res.send({ message: "Equipo agregado con éxito" })
}

module.exports = { obtenerEquipos, agregarEquipo }