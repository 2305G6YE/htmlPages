const list = document.createElement("li");
const inline = document.createElement("span");
const btn = document.createElement("button");
list.appendChild(inline);
list.appendChild(btn);
inline.textContent = '${input}';
btn.textContent = 'Delete';
ul.appendChild(list);
btn.addEventListener("click", () => {
    list.remove();
});
document.getElementById("item").focus();