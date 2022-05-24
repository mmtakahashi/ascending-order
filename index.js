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

        const toHalfWidth = str => {
            return str.replace(/[\uFF01-\uFF5E]/g, ch => {
              return String.fromCharCode(ch.charCodeAt(0) - 0xFEE0);
            });
        };
        
        for(let i = 0; i < myHistory.length; i++) {
            const itemText = myHistory[i];
            const listItem = document.createElement('li');
            const half = toHalfWidth(itemText);
            listItem.textContent = half;
            inputArea.appendChild(listItem);
        }
    } 
    inputOrder.focus();   
}

const updateList = asc => {
    while(inputArea.firstChild){
        inputArea.removeChild(inputArea.firstChild);
    }

    const toHalfWidth = str => {
        return str.replace(/[\uFF01-\uFF5E]/g, ch => {
          return String.fromCharCode(ch.charCodeAt(0) - 0xFEE0);
        });
    };

    const toHalf = half => toHalfWidth(half);
    
    for(let i = 0; i < asc.length; i++) {
        const ascText = toHalf(asc[i]);
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