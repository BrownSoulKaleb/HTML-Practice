const element = document.createElement('p');
const e = document.createElement('div');
e.innerHTML = 'JavaScript DOM';
document.body.appendChild(e);
var textnode = document.createTextNode('JavaScript DOM');
e.appendChild(textnode); 
console.log(e);