const  buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", ()=>{
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "C"){
            ClearResult();
        } else if (buttonValue === "="){
            CalculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
    
}

function ClearResult(){
    inputFieldEl.value = "";
}

function CalculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue(buttonValue){
    inputFieldEl.value += buttonValue // inputFieldEl.value = inputField.value + bottonValue
}