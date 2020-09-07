const opts1 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Descripcion de la tarea por hacer"
    },
}

const opts2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Descripcion de la tarea por hacer"
    },
    completado: {
        demand: true,
        alias: 'c',
        desc: "Marca si la tarea esta completada"
    },
}



const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opts1)
    .command('borrar', 'Borrar elemento', opts1)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts2)
    .help()
    .argv;

module.exports = {
    argv
}