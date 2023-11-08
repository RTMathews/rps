const container = document.querySelector('#container');

const red = document.createElement('p');
red.classList.add('red');
red.textContent = "Hey I'm Red!"
red.style.cssText = "color:red;"

container.appendChild(red);

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.textContent = "I'm a blue h3!"
blue.style.cssText = "color:blue;"

container.appendChild(blue);

const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pinkDiv');
pinkDiv.style.cssText = "background-color:pink;"
pinkDiv.style.border = "2px solid black";
const pinkH1 = document.createElement('h1');
const pinkP = document.createElement('p');
pinkH1.textContent = "I'm in a div"
pinkP.textContent = "ME TOO!"

pinkDiv.appendChild(pinkH1);
pinkDiv.appendChild(pinkP);
container.appendChild(pinkDiv);