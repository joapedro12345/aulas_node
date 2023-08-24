const fs = require('fs')

fs.readFile('frase.txt', 'utf8', (file, arroz)=> {
    if(erro){
        console.log(file)
        return
    }

    console.log(arroz)
})