var form = document.querySelector("#new-item-form");
var input = document.querySelector("#new-item-input");
var list = document.querySelector("#todo-list");

function formSubmitted(event) {
  event.preventDefault();
  var ingredients = input.value.split(",");
  ingredients.forEach(addIngredient);
  localStorage.setItem("listHTML", list.innerHTML);
  localStorage.getItem("listHTML");
  form.reset();
}

function addIngredient(ingredient) {
  var listItem = document.createElement("li");
  list.appendChild(listItem);
  var label = document.createElement("label");
  var newInput = document.createElement("input");
  var span = document.createElement("span");
  label.appendChild(newInput);
  label.appendChild(span);
  listItem.appendChild(label)
  newInput.setAttribute("type","checkbox");
  span.textContent = ingredient;
}

form.addEventListener("submit", formSubmitted);
