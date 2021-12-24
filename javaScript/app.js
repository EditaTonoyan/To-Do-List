const inputValue = document.querySelector(".create_new_task");
const totalCount = document.querySelector("#totalCount");

const addButton = document.querySelector(".create_button");
const mainCardItemText = document.querySelector('.main__card_items_text');
const mainCarditem = document.querySelector('.main__card_item');
let mainCard = document.querySelector('.main__card');
const editButtonElement = document.querySelectorAll('.edit_button');
const deleteButtonElement = document.querySelectorAll('.delete_button');
const cardItem = document.querySelector('#card_item');
const modalElement = document.querySelector('.modal');
const ConfirmModalElement = document.querySelector('.confirm__modal');
const backdropElement = document.querySelector('.backdrop');
const modalInput = document.querySelector('.modal_title');
const closeModal = document.querySelector('.button_close');
const saveModal = document.querySelector('.button_save');
const confirmYesModal = document.querySelector('.button_confirm_yes');
const closeImage = document.querySelector('.modal__form_image');
const confirmCloseImage = document.querySelector('.confirm_modal_form_image');
// const confirmModal = document.querySelector('.confirm__modal');
const closeConfirmButton = document.querySelector('.button_confirm_close');
const confirmModalInputTaskText = document.querySelector('.confirm__modal_task_text');
const checkedBox  = document.querySelectorAll('.cheked_box');
const complatedTasks = document.querySelector('.complated');
const complatedTaskButton = document.querySelector('.complated__task_button');
const complatedArrow = document.querySelector('.complated_arrow');
const complatedItems = document.querySelector('.complated_items');
const successMessage = document.querySelector('.succes_mesage')



addButton.addEventListener('click', handlecreateTask);
closeModal.addEventListener('click', closemodal);
closeConfirmButton.addEventListener('click', closemodal)
saveModal.addEventListener('click', saveEditedText);
backdropElement.addEventListener('click', closemodal);
closeImage.addEventListener('click', closemodal);
confirmCloseImage.addEventListener('click', closemodal);
confirmYesModal.addEventListener('click', deleteTask);
complatedTaskButton.addEventListener('click', onClickComplatedButton)
for (let buttons of editButtonElement){
    buttons.addEventListener('click', editTask);
}
for(let delButtons of deleteButtonElement){
    delButtons.addEventListener('click', OpenConfirmModal )
}

for(let check of checkedBox){
    check.addEventListener('click', toggleCheckBox )
}

