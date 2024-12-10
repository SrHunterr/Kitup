let openn = document.querySelector('#nav')

let menu = document.querySelector('#butao')

let fechar = document.querySelector('#fechar')

let openai = () => {
    openn.style.display = 'flex'
    menu.style.display = 'none'
    fechar.style.display = 'flex'
}

let fecharM = () =>{
    openn.style.display = 'none'
    menu.style.display = 'flex'
    fechar.style.display = 'none'
}

let nav = () =>{
    headerOptions.style.ddisplay = 'flex'


    setTimeout(()=> {
        headerOptions.style.width

    })
}
fechar.onclick = fecharM
menu.onclick = openai

