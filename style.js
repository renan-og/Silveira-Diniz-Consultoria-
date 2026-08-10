const carrossel = document.getElementById("carrossel");
const btnAntr = document.getElementById("btn-anterior");
const btnProx = document.getElementById("btn-proximo");

let maxCards = document.querySelectorAll("#carrossel figure").length;
const maxPosition = -((maxCards - 3) * 33.333)

let position = 0

btnProx.addEventListener('click', ()=>{
    console.log(maxCards);
    if(position > maxPosition){
        position -= 33.333;
        carrossel.style.transform = `translateX(${position}%)`;
    }
        
});

btnAntr.addEventListener('click', ()=>{
    if(position < 0){
        position += 33.333;
        carrossel.style.transform = `translateX(${position}%)`;
    };
});