const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// function deixarEmMaiuscula(obj){
//     for(let prop in obj){
//         obj[prop] = obj[prop].toUpperCase()
//     }
//     return obj
// }

const deixarEmMaiuscula = (obj) => {
    const novoObj = {
        nome: obj.nome.toUpperCase(),
        profissao: obj.profissao.toUpperCase(),
        username: obj.username.toUpperCase(),
        senha: obj.senha.toUpperCase()
    }
    return novoObj
}

console.log(deixarEmMaiuscula(infosPessoa))

function retornarFrase(obj){
    let frase = ``
    for(let prop in obj){
        let valor = obj[prop]
        let propriedade = prop
        frase += `O valor da propriedade ${propriedade} é ${valor}. `
    }
    return frase
}
// retornarFrase(infosPessoa)

function usarCallback (obj, callback){
    const result = callback(obj)
    console.log(result)
}

usarCallback(infosPessoa, retornarFrase)