function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement("div");
        temp.innerHTML = htmlStr;
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }
    return frag;
  }
    const handlecreateTask = () => {
    const taskTitle = inputValue.value;
    inputValue.value = "";
    localStorage.setItem(`${taskTitle}`, taskTitle);
    mainCardItemText.style.display = 'none';
    const taskItem = `<div class="main__card_item">
                          <div class="flex">
                          <input class="card_item" type="checkbox" id="check" name="check"/>
                          <p class="card_item">${taskTitle}</p>
                          </div>
                          <div>
                          <button class="card_item_second" id="edit_button">Edit</button>
                          <button class="card_item_second" id="delete_button">Delete</button>
                          </div>
                      </div>`;
    let fragment = create(taskItem);
    mainCardItems.append(fragment);
    totalCount.textContent++;
  }

  const editTask = () => {
    const taskItem  =` <input type="text" class="main__card_item"/>`
                        let fragment = create(taskItem);
                        mainCardItems.append(fragment);
  }



   