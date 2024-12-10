 // Seleciona todos os elementos com a classe 'card'
 const cards = document.querySelectorAll('.card');

 // Adiciona um listener de clique para cada card
 cards.forEach(card => {
     card.addEventListener('click', () => {
         // Alterna a classe 'animacao' para iniciar/pausar a animação
         card.classList.toggle('animacao');
     });
 });

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

