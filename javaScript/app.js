const inputValue = document.querySelector(".create_new_task");
const totalCount = document.querySelector("#totalCount");
let check = false;

const addButton = document.querySelector(".create_button");
const mainCardItemText = document.querySelector('.main__card_items_text');
let mainCard = document.querySelector('.main__card');
const editButtonElement = document.querySelectorAll('.edit_button');
const cardItem = document.querySelector('#card_item');
const modalElement = document.querySelector('.modal');
const backdropElement = document.querySelector('.backdrop');
const modalInput = document.querySelector('.modal_title');
const closeModal = document.querySelector('.button_close');
const saveModal = document.querySelector('.button_save');
const closeImage = document.querySelector('.modal__form_image');



addButton.addEventListener('click', handlecreateTask);
closeModal.addEventListener('click', closemodal);
saveModal.addEventListener('click', saveEditedText);
backdropElement.addEventListener('click', closemodal);
closeImage.addEventListener('click', closemodal);
for(let buttons of editButtonElement){
    buttons.addEventListener('click', editTask);
}
