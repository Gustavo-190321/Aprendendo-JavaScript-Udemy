const soma = function (x ,y){
    return x + y
}
const imprimir = function (a , b , operação = soma){
    console.log(operação(a,b))
}
imprimir(3,4)
imprimir(3,4,soma)
imprimir(3,4, function (x ,y){
    return x = y
})
imprimir(3,4 ,(x,y) => x*y)

const pessoa ={
    falar(){
        console.log('opa')
    }
}
pessoa.falar()
