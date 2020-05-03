
const LightButton = document.getElementById("light"); //get id's of buttons 
const DarkButton = document.getElementById("dark");
const body = document.body;

DarkButton.onclick = function lightswitch(){ //Function happens when object is clicked
    body.classList.replace("light", "dark");
};

LightButton.onclick = function darkswitch(){
    body.classList.replace("dark", "light");
};
