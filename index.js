document.getElementById("add-button").addEventListener("click", ()=> onClickadd());
document.getElementById("asecending-order").addEventListener("click", ()=> onClickasc());
const inputOrder = document.getElementById("input-order");
const inputArea = document.getElementById("input-area");

let myHistory = [];

const onClickadd = () => {
    if(inputOrder.value !== ''){
        myHistory.unshift(inputOrder.value);
        inputOrder.value = '';
        
        while(inputArea.firstChild){
            inputArea.removeChild(inputArea.firstChild);
        }

        for(let i = 0; i < myHistory.length; i++) {
            itemText = myHistory[i];
            const listItem = document.createElement('li');
            listItem.textContent = itemText;
            inputArea.appendChild(listItem);
        }
    } 
    inputOrder.focus();   
}

const updateList = (asc) => {
    while(inputArea.firstChild){
        inputArea.removeChild(inputArea.firstChild);
    }
    
    for(let i = 0; i < asc.length; i++) {
    ascText =  asc[i]
    const listItem = document.createElement('li');
    listItem.textContent = ascText;
    inputArea.appendChild(listItem);
    }
}

const onClickasc = () => {
    let ascending = myHistory.sort((a,b)=>{
        return a - b;
    })
    updateList(ascending);
}