const container = document.querySelector("#container");

const content = document.createElement("p");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);
content.style.color = "red";

//Yikes bro;
const heading = document.createElement("h3");
heading.textContent = "I'm a blue h3!";
container.appendChild(heading);
heading.style.color = "blue";

const lowestBox = document.createElement("div");
lowestBox.style.cssText = "background-color: rgb(255, 192, 203); border: 1px solid black;"
const box1 = document.createElement("h1");
box1.textContent = "I'm a div";
const box2 = document.createElement("p");
box2.textContent = "ME TOO!";
lowestBox.appendChild(box1);
lowestBox.appendChild(box2);
container.appendChild(lowestBox);
//2nd section complete



