//en consola node app --b 8 --l --h 10 (para crear una nueva tabla de multiplicar)
//(si no quiero que lo liste en pantalla no ponemos --l)
//en consola node app --help (para ver las variables definidas en yargs)

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default:false,//valor por defecto
        describe:'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: 10,
        describe:'Este es el número hasta donde quieres la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

    module.exports=argv;