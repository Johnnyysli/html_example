function createItem(item) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    const button = createSubElement("remove-item btn-link text-red");
    const icon = createSubElement("fa-solid fa-xmark", "i");
    button.appendChild(icon);
    li.appendChild(button);
        document.querySelector(".items").appendChild(li);
}

// function createButton(classes) {
//     const button = document.createElement("button");
//     button.className = classes;
//     const icon = createIcon("fa-solid fa-xmarks");
//     button.appendChild(icon);
//     return button;
// }

function createSubElement(classes,e_type) {
    const subElement = document.createElement(e_type);
    subElement.className = classes;
    return subElement;
}

// // function createIcon(classes 
// function createSubElement(classes,e_type) {
//     const subElement = document.createElement("e_type);
//     subElement.className = classes;
//     return subElement;
// }

createItem("orange");
createItem("mango");