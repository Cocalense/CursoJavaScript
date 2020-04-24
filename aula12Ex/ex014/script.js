function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ` Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'fotomanha.png'
        window.document.body.style.background ='#f4ca99'
    }else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'fototarde.png'
        window.document.body.style,background ='#7a8fae'
    }else{
        //Boa noite
        img.src = 'fotonoite.png'
        window.document.body.style.background ='#9272a5'
    }
}

