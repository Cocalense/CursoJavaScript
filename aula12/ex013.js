var idade = 69
console.log(`Voce tem ${idade} anos.`)
if(idade < 16){
    console.log(`Você tem ${idade} anos .É menor !`)

}else if( idade >= 18){
    console.log(`Já é de maior com ${idade} anos .`)
}else if(idade < 18 || idade >65){
    console.log(`Pela sua idade de ${idade} anos, seu voto é obrigatorio`)
}