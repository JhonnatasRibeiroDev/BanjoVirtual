const A = new Audio('sons/A.mp3');
const B = new Audio('sons/B.mp3');
const C = new Audio('sons/C.mp3');
const D = new Audio('sons/D.mp3');
const E = new Audio('sons/E.mp3');
const F = new Audio('sons/F.mp3');
const G = new Audio('sons/G.mp3');
let btn = document.querySelectorAll("button")
arrayBtn = Array.from(btn)
document.addEventListener("click", (e)=>{
    let elemento = e.target
    if(elemento.innerText === "Do(C)"){
        C.play();
        C.currentTime -= 1;
    }
    if(elemento.innerText === "Ré(D)"){
        D.play();
        D.currentTime -= 1;
    }
    if(elemento.innerText === "Mi(E)"){
        E.play();
        E.currentTime -= 1;
    }
    if(elemento.innerText === "Fa(F)"){
        F.play();
        F.currentTime -= 1;
    }
    if(elemento.innerText === "Sol(G)"){
        G.play()
        G.currentTime -= 1;
    }
    if(elemento.innerText === "Lá(A)"){
        A.play();
        A.currentTime -= 1;
    }
    if(elemento.innerText === "Si(B)"){
        B.play();
        B.currentTime -= 1;
    }
})
document.addEventListener('keydown', function(event) {
  if (event.key === '6') {
    A.play();
    A.currentTime -= 1;
  }
  if (event.key === '7') {
    B.play();
    B.currentTime -= 1;
  }
  if (event.key === '1') {
    C.play();
    C.currentTime -= 1;
    arrayBtn[0].style.backgroundColor = "purple"
    arrayBtn[0].style.color="white"
    setTimeout(() => {
        arrayBtn[0].style.backgroundColor = "white"
        arrayBtn[0].style.color="black"
        ;
    }, 500);
  }
  if (event.key === '2') {
    D.play();
    D.currentTime -= 1;
    arrayBtn[1].style.backgroundColor = "purple"
    arrayBtn[1].style.color="white"
    setTimeout(() => {
        arrayBtn[1].style.backgroundColor = "white"
        arrayBtn[1].style.color="black"
        ;
    }, 500);
  }
  if (event.key === '3') {
    E.play();
    E.currentTime -= 1;
    arrayBtn[2].style.backgroundColor = "purple"
    arrayBtn[2].style.color="white"
    setTimeout(() => {
        arrayBtn[2].style.backgroundColor = "white"
        arrayBtn[2].style.color="black"
        ;
    }, 500);
  }
  if (event.key === '4') {
    F.play();
    F.currentTime -= 1;
    arrayBtn[3].style.backgroundColor = "purple"
    arrayBtn[3].style.color="white"
    setTimeout(() => {
        arrayBtn[3].style.backgroundColor = "white"
        arrayBtn[3].style.color="black"
        ;
    }, 500);
  }
  if (event.key === '5') {
    G.play();
    G.currentTime -= 1;
    arrayBtn[4].style.backgroundColor = "purple"
    arrayBtn[4].style.color="white"
    setTimeout(() => {
        arrayBtn[4].style.backgroundColor = "white"
        arrayBtn[4].style.color="black"
        ;
    }, 500);
  }
  if (event.key === '6') {
    G.play();
    G.currentTime -= 1;
    arrayBtn[5].style.backgroundColor = "purple"
    arrayBtn[5].style.color="white"
    setTimeout(() => {
        arrayBtn[5].style.backgroundColor = "white"
        arrayBtn[5].style.color="black"
        ;
    }, 500);
  }
  if (event.key === '7') {
    G.play();
    G.currentTime -= 1;
    arrayBtn[6].style.backgroundColor = "purple"
    arrayBtn[6].style.color="white"
    setTimeout(() => {
        arrayBtn[6].style.backgroundColor = "white"
        arrayBtn[6].style.color="black"
        ;
    }, 500);
  }
});


1