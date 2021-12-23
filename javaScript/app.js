const inputValue = document.querySelector(".create_new_task");
const totalCount = document.querySelector("#totalCount");
let check = false;

const addButton = document.querySelector(".create_button");
const mainCardItemText = document.querySelector('.main__card_items_text');
let mainCard = document.querySelector('.main__card');
const editButtonElement = document.querySelector('#edit_button');

addButton.addEventListener('click', handlecreateTask);
editButtonElement.addEventListener('click', editTask);