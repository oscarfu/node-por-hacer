const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];




switch (comando) {
    case 'crear':

        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':

        let listado = getListado();

        for (const tarea of listado) {
            console.log('====Por Hacer===='.green)
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('================='.green)
        }


        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        if (actualizado)
            console.log('===Actualizado Correctamentre===='.green)
        else
            console.log('===El campo no existe==='.green)
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('No es reconocida');
}