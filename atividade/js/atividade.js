const logo=document.querySelector('#logo')
const GOKU=document.querySelector('#GOKU')
const VEGETA=document.querySelector('#VEGETA')
const GOHAN=document.querySelector('#GOHAN')
const FREEZA=document.querySelector('#FREEZA')
const TRUNKS=document.querySelector('#TRUNKS')
const CELL=document.querySelector('#CELL')
const CHICHI=document.querySelector('#CHICHI')
const PICCOLO=document.querySelector('#PICCOLO')
const GOTEN=document.querySelector('#GOTEN')
const KURIRIN=document.querySelector('#KURIRIN')

//evento

GOKU.addEventListener('click',Goku)

VEGETA.addEventListener('click',Vegeta)

GOHAN.addEventListener('click',Gohan)

FREEZA.addEventListener('click',Freeza)

TRUNKS.addEventListener('click',Trunks)

CELL.addEventListener('click',Cell)

CHICHI.addEventListener('click', Chichi)

PICCOLO.addEventListener('click', Piccolo)

GOTEN.addEventListener('click', Goten)

KURIRIN.addEventListener('click', Kuririn)


//funções
function Goku(){
    logo.src='img/goku.png'
}

function Vegeta(){
    logo.src='img/vegeta.png'
}
function Gohan(){
    logo.src='img/gohan.png'
}
function Freeza(){
    logo.src='img/freeza.png'
}
function Trunks(){
    logo.src='img/trunks.png'
}
function Cell(){
    logo.src='img/cell.png'
}
function Chichi(){
    logo.src='img/chi chi.png'
}
function Piccolo(){
    logo.src='img/piccolo (1).png'
}
function Goten(){
    logo.src='img/goten.png'
}
function Kuririn(){
    logo.src='img/kuririn.png'
}