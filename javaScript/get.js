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
const storageTasks = Object.values(localStorage);
totalCount.textContent = storageTasks.length;
if(storageTasks){
    for(let task of storageTasks){
    mainCardItemText1.style.display = 'none';
    const taskItemText = (`<div class="main__card_item">
                                <div class="flex">
                                    <input class="card_item cheked_box" type="checkbox" id="check_${task.slice(0,1)}" name="check"/>
                                    <p class="card_item card__item_p">${task}</p>
                                </div>
                                <div>
                                    <button class="card_item_second edit_button">Edit</button>
                                    <button class="card_item_second delete_button">Delete</button>
                                </div>
                            </div>`);
                    let fragment = create(taskItemText);
                    mainCardItems.append(fragment);
    }   
}else{

    console.log(444)
}
