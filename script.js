/* Mis variables */
let who = ['The dog 🐶','My grandma 👵 ','His turtle 🐢','My bird 🦜'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
// Funcion
function excuseGenerator(who, what, action, when){
    numWho = Math.floor(Math.random() * who.length);
    numWhat = Math.floor(Math.random() * what.length);
    numAction = Math.floor(Math.random() * action.length);
    numWhen = Math.floor(Math.random() * when.length);
    return who[numWho] + " " + action[numAction]+ " " + what[numWhat] + " " + when[numWhen];
}
// Cargar funcion
function onLoad(){
    let excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, action, what, when);
}
window.onload = onLoad;