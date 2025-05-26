const list = document.querySelector("ul");
const point = document.querySelector("input");
const addBtn = document.querySelector("button");

addBtn.addEventListener("click", () => { 
    const savedItem = point.value;
    point.value = '';

    const listItem = document.createElement("li");
    const inline = document.createElement("span");
    const deleteBtn = document.createElement("button");

    listItem.appendChild(inline);
    listItem.appendChild(deleteBtn);
    inline.textContent = savedItem;
    deleteBtn.textContent = 'Delete';
    list.appendChild(listItem);

    deleteBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    });

    point.focus();
});