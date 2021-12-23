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
                            <p class="card_item" id="card_item">${taskTitle}</p>
                            </div>
                            <div>
                            <button class="card_item_second edit_button" >Edit</button>
                            <button class="card_item_second delete_button"  >Delete</button>
                            </div>
                        </div>`;
    let fragment = create(taskItem);
    mainCardItems.append(fragment);
    totalCount.textContent++;
  }


  let curentInput = '';
  const editTask = (event) => {
    curentInput = event.target.parentElement.parentElement.querySelector('.card__item_p');
    const inputValue = event.target.parentElement.parentElement.querySelector('.card__item_p').textContent;  
    modalInput.value = inputValue;
    modalElement.style.display = 'block';
    backdropElement.style.display = 'block';

  }

  const closemodal = () => {
    modalElement.style.display = 'none';
    backdropElement.style.display = 'none';
  }

  const saveEditedText = (event) => {
    
    console.log(curentInput);
    
  }