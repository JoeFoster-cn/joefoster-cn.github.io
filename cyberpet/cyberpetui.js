//variables
const start = document.querySelector("#start");
const restart = document.querySelector("#restart");
const choose = document.querySelector("#choose");
const dogImg = document.querySelector("#dogImg");
const catImg = document.querySelector("#catImg");
const rabImg = document.querySelector("#rabImg");
const petImg = document.querySelector(".petImg");
const dogImg2 = document.querySelector("#dogImg2")
const catImg2 = document.querySelector("#catImg2")
const rabbitImg2 = document.querySelector("#rabImg2")
const petImg2 = document.querySelector(".petImg2");
const dogText = document.querySelector("#selectDog");
const catText = document.querySelector("#selectCat");
const rabText = document.querySelector("#selectRab");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const placeholder = document.getElementById("placeholder");
const info = document.querySelector(".info");
const dogButtons = document.querySelector(".dogButtons");
const catButtons = document.querySelector(".catButtons");
const rabButtons = document.querySelector(".rabButtons");
const animalButtons = document.querySelector(".petButtons");
const feed = document.querySelector("#feed");
const drink = document.querySelector("#drink");
const play = document.querySelector("#play");
const hunger = document.querySelector("#hunger");
const thirst = document.querySelector("#thirst");
const happiness = document.querySelector("#happiness");
const progressDiv = document.querySelector(".progress");
let pet; //creates variable as undefined, then defined in pet img buttons as new Pet class

restart.addEventListener("click", (event) => {
    location.reload();
}) //new game

choose.addEventListener("click", (event) => {
    petImg.style.display = "block";
    choose.style.display = "none";
    restart.style.display = "none";
}) //choose pet

dogImg.addEventListener("click", (event) => {
    petImg.style.display = "none";
    petImg2.style.display = "block";
    catImg2.style.display = "none";
    rabbitImg2.style.display = "none";
    dogImg2.style.display = "block";
    selectDog.style.display = "block";
    input.style.display = "block";
    submit.style.display = "block";
    info.style.display = "block"
    pet = new Dog ("Poppy");
}) //select Dog

catImg.addEventListener("click", (event) => {
    petImg.style.display = "none";
    petImg2.style.display = "block";
    catImg2.style.display = "block";
    rabbitImg2.style.display = "none";
    dogImg2.style.display = "none";
    selectCat.style.display = "block";
    input.style.display = "block";
    submit.style.display = "block";
    info.style.display = "block"
    pet = new Cat ("Prince");
}) //select Cat

rabImg.addEventListener("click", (event) => {
    petImg.style.display = "none";
    petImg2.style.display = "block";
    catImg2.style.display = "none";
    rabbitImg2.style.display = "block";
    dogImg2.style.display = "none";
    selectRab.style.display = "block";
    input.style.display = "block";
    submit.style.display = "block";
    info.style.display = "block"
    pet = new Rabbit ("Hoppy");
}) //select Rabbit

submit.addEventListener("click", () => {  //submit name, start game process
    placeholder.style.display = "block";
    placeholder.textContent = input.value;
    submit.style.display = "none";
    input.style.display = "none";
    selectRab.style.display = "none";
    selectCat.style.display = "none";
    selectDog.style.display = "none";
    animalButtons.style.display = "block";
    restart.style.display = "block";
    hunger.style.display = "block";
    thirst.style.display = "block";
    happiness.style.display = "block";
    progressDiv.style.display = "block";
    console.log(pet)
    hunger.value = pet.hunger // progress bar value = pet subclass and their level defined as 100 in Pet class
    thirst.value = pet.thirst
    happiness.value = pet.happiness
    setInterval(() => { 
        pet.hunger -= 5; //hunger depreciation 
        hunger.value = pet.hunger //progress bar value = pet get property of pet class
    }, 1500); //value reduction of progress bar in milliseconds
    setInterval(() => { 
        pet.thirst -= 3; //thirst depreciation 
        thirst.value = pet.thirst
    }, 1900); //value reduction of progress bar in milliseconds
    setInterval(() => {
        pet.happiness -= 7; //happiness depreciation
        happiness.value = pet.happiness
    }, 2000); //value reduction of progress bar in milliseconds
})

feed.addEventListener("click", () => { //feed button
    pet.feed(); //feed function defined in Pet class
    hunger.value = pet.hunger 
})

drink.addEventListener("click", () => { //drink button
    pet.drink(); //drink function defined in Pet class
    thirst.value = pet.thirst
})

play.addEventListener("click", () => { //play button
    pet.play(); //play button defined in Pet class
    happiness.value = pet.happiness
})