
require('dotenv/config');
var fs = require("fs");
const path = require('path');

var JavaScriptObfuscator = require('javascript-obfuscator');

fs.readdirSync('./' + process.env.PASTA_ORIGEM + '/').forEach(file => {

    if (path.extname(file) == ".js") {

        console.log("Arquivo encontrado: ", file)

        fs.readFile('./' + process.env.PASTA_ORIGEM + '/' + file, 'utf8', function (err, data) {

            if (err) {
                console.log("Erro arquivo: ", file, err)
            }

            let obfuscationResult = JavaScriptObfuscator.obfuscate(data, { optionsPreset: process.env.OPTIONSPRESET });

            fs.writeFile('./' + process.env.PASTA_DESTINO + '/' + file, obfuscationResult.getObfuscatedCode(), function (err) {
                if (err) {
                    return console.log("Erro ao ofuscar:", file, err);
                }
                console.log("Arquivo ofuscado: ", file);
            });
        })
    }

});


