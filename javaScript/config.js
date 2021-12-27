    const createTask = (htmlStr) => {
      let frag = document.createDocumentFragment(),
          temp = document.createElement("div");
          temp.innerHTML = htmlStr;
      while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
      }
      return frag;
    }

    const handleCreateTask = () => {
      const taskTitle = inputValue.value;
      if(taskTitle === ''){
      inputValue.style.border = '1px solid red';
      inputValue.style.backgroundColor = '#fff2f2';
      return;
    }
      inputValue.value = "";
      localStorage.setItem(`${taskTitle}`, taskTitle);
      mainCardItemText.style.display = 'none';
      inputValue.style.border = '1px solid rgb(192, 196, 196)';
      inputValue.style.backgroundColor = '#fff';
          const taskItem = `<div class="main__card_item">
                              <div class="flex">
                                <input class="card_item cheked_box" type="checkbox" name="check"/>
                                <p class="card_item card__item_p" >${taskTitle}</p>
                              </div>
                              <div>
                                <button class="card_item_second edit_button" >Edit</button>
                                <button class="card_item_second delete_button"  >Delete</button>
                              </div>
                            </div>`;
      let fragment = createTask(taskItem);
      mainCardItems.append(fragment);
      totalCount.textContent++;
      successMessage.style.display = "block"
      setTimeout(()=>{
        successMessage.style.display = "none"
      }, 3000)
  }

  let curentInput = '';
  const editTask = (event) => {
    curentInput = event.target.parentElement.parentElement.querySelector('.card__item_p');
    modalInput.value = event.target.parentElement.parentElement.querySelector('.card__item_p').textContent;  
    modalElement.style.display = 'block';
    backdropElement.style.display = 'block';
    modalInput.style.border = '1px solid rgb(204, 204, 204)';
    modalInput.style.backgroundColor = '#f9f9f9';
 
  }

  const closeModal = () => {
    modalElement.style.display = 'none';
    backdropElement.style.display = 'none';
    ConfirmModalElement.style.display ='none'
  }

  const saveEditedText = () => {
    const modalInputText = modalInput.value;
    if(modalInputText ===''){
      modalInput.style.border = '1px solid red';
      modalInput.style.backgroundColor = '#fff2f2';
      return;
    }
    curentInput.textContent = modalInputText;
    modalElement.style.display = 'none';
    backdropElement.style.display = 'none';
  

  }

  const openConfirmModal = (event) => {
    curentInput =  event.target.parentElement.parentElement;
    backdropElement.style.display = 'block';
    ConfirmModalElement.style.display = 'block';
    confirmModalInputTaskText.textContent = `${curentInput.querySelector('.card__item_p').textContent}`;

  }

  const deleteTask = () => {
    localStorage.removeItem(`${curentInput.querySelector('.card__item_p').textContent}`);
    curentInput.remove();
    backdropElement.style.display = 'none';
    ConfirmModalElement.style.display ='none'
  }

  const toggleCheckBox = (event) => {
    curentInput =  event.target.parentElement.parentElement;
    const checkedCurrentElement = curentInput.querySelector('.cheked_box');
    const compTaskTitle = curentInput.querySelector('.card__item_p').textContent;
    if (checkedCurrentElement.checked){
        curentInput.style.display = 'none';
        const compTask =`<div class="main__card_item compllated_checkbox" >
                              <div class="flex">
                                <input class="card_item complated_cheked_box" type="checkbox"  name="check" checked/>
                                <p class="card_item complated_task" >${compTaskTitle}</p>
                              </div>
                        </div>`;
        let fragment = createTask(compTask);
        complatedItems.append(fragment);
        totalCount.textContent--;
        complatedTaskButton.style.display = 'flex';
    } else{
      curentInput.querySelector('.card__item_p').style.textDecoration = 'none'
    }

  }

  const toggleUcheckBox = (event) => {
    curentInput =  event.target.parentElement.parentElement;
    console.log(curentInput);
  }
  const onClickComplatedButton = () => {
    complatedArrow.classList.toggle('complated_arrow_rotate');
    complatedItems.classList.toggle('complated_items_toggle');
  }