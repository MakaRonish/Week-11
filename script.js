document.getElementById("parent").innerHTML=("Something else");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-align:center");
document.getElementsByClassName("exercise")[1].innerHTML=("Im Hacker2");
document.getElementsByTagName("h1")[0].innerHTML=("I am Change");
document.querySelector("h1").style.cssText=("background-color:aqua; color:blue")
const change = document.querySelectorAll('h2');
for(i=0;i<=change length; i++){
    change[i].innerHTML=('I am boss')
}
function myFunction(){
    const element =document.body;
    element.classList.toggle('dark-mode');
}