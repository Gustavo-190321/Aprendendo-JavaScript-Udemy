let compara = function (param){
    console.log(this === param)
}
compara(global)
const obj = {}
compara = compara.bind(obj)
compara(global)
compara(obj)

let comparaarrow = param => console.log(this === param)
comparaarrow(global)
comparaarrow(module.exports)

comparaarrow = comparaarrow.bind(obj)
comparaarrow(obj)