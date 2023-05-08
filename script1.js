function myFunction(){
    const element = document.body;
    element.classList.toggle('dark-mode');
    if(element.classList.contains('dark-mode')){
        GamepadButton.textContent="Light Mode";
    }else{
        GamepadButton.textContent="Dark Mode";
    }
}

const textchange = document.querySelector("#change");
const values = [' a student',"a good person"]
let counter = 0;
setInterval(()=>{
    textchange.textContent=values[counter];
    counter=(counter+1)%values.length;
},3000);