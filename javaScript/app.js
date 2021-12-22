const inputValue = document.querySelector(".create_new_task");

const totalCount = document.querySelector("#totalCount");

const addButton = document.querySelector(".create_button");

let card = document.querySelector(".main__card");

function create(htmlStr) {
  var frag = document.createDocumentFragment(),
    temp = document.createElement("div");
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

function handlecreateTask(event) {
  const taskTitle = inputValue.value;
  inputValue.value = "";
  const taskItem = `<div class="main__card_item">
                        <div class="flex">
                        <input class="card_item" type="checkbox" />
                        <p class="card_item">${taskTitle}</p>
                        </div>
                        <div>
                        <button class="card_item_second">Edit</button>
                        <button class="card_item_second">Delete</button>
                        </div>
                    </div>`;

  var fragment = create(taskItem);

  card.append(fragment);

  totalCount.textContent++;
}

addButton.addEventListener("click", handlecreateTask);
