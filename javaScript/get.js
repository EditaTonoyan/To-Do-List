let mainCardItems = document.querySelector(".main__card_items");
const mainCardItemText1 = document.querySelector('.main__card_items_text');
function create(htmlStr) {
    var frag = document.createDocumentFragment(),
    temp = document.createElement("div");
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}
const storageTasks = Object.keys(localStorage);
totalCount.textContent = storageTasks.length;
    for(let task of storageTasks){
        mainCardItemText1.style.display = 'none';
        const taskItemText = (`<div class="main__card_item">
                                 <div class="flex">
                                     <input class="card_item" type="checkbox" id="check" name="check"/>
                                     <p class="card_item">${task}</p>
                                 </div>
                                 <div>
                                     <button class="card_item_second" id="edit_button">Edit</button>
                                     <button class="card_item_second">Delete</button>
                                 </div>
                             </div>`);
                       let fragment = create(taskItemText);
                       mainCardItems.append(fragment);
    }