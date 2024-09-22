let ul = document.querySelector("ul");
let btn = document.querySelector("#btn");
let input = document.querySelector("input");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

ul.addEventListener("click", (e) => {
    e.stopPropagation();
    e.target.parentNode.remove();
})

btn.addEventListener("click", () => {
    let value = input.value.trim();
    if (value.length > 0) {

        let li = document.createElement("li");
        li.textContent = value;
        ul.appendChild(li);

        let delbtn = document.createElement("button");

        delbtn.textContent = "Delete";
        li.append(delbtn);
        

        input.value = "";

    }

})


