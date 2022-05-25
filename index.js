document.getElementById("add-button").addEventListener("click", ()=> onClickadd());
document.getElementById("asecending-order").addEventListener("click", ()=> onClickasc());
const inputOrder = document.getElementById("input-order");
const inputArea = document.getElementById("input-area");

let myHistory = [];

const onClickadd = () => {
    if(inputOrder.value !== ''){
        // 配列の最初に要素を追加していく
        myHistory.unshift(inputOrder.value);
        // 要素が入力されたら入力欄を空にする
        inputOrder.value = '';
        
        // 親要素の最初の子要素（firstChild）がなくなるまで、removeChildで削除し続ける
        while(inputArea.firstChild){
            inputArea.removeChild(inputArea.firstChild);
        }

        // 全角英数を半角英数にする
        const toHalfWidth = str => {
            return str.replace(/[\uFF01-\uFF5E]/g, ch => {
              return String.fromCharCode(ch.charCodeAt(0) - 0xFEE0);
            });
        };
        
        // liを生成して配列を表示する
        for(let i = 0; i < myHistory.length; i++) {
            const itemText = toHalfWidth(myHistory[i]);
            const listItem = document.createElement('li');
            listItem.textContent = itemText;
            inputArea.appendChild(listItem);
        }
    }
    // 入力欄にフォーカスを当てる 
    inputOrder.focus();   
}

const updateList = asc => {
    // 親要素の最初の子要素（firstChild）がなくなるまで、removeChildで削除し続ける
    while(inputArea.firstChild){
        inputArea.removeChild(inputArea.firstChild);
    }

    // 全角英数を半角英数にする
    const toHalfWidth = str => {
        return str.replace(/[\uFF01-\uFF5E]/g, ch => {
          return String.fromCharCode(ch.charCodeAt(0) - 0xFEE0);
        });
    };

    // liを生成して昇順になった配列を表示する
    for(let i = 0; i < asc.length; i++) {
        const ascText = toHalfWidth(asc[i]);
        const listItem = document.createElement('li');
        listItem.textContent = ascText;
        console.log(ascText);
        inputArea.appendChild(listItem);
    }
}

// 昇順ボタンが押されたらupdateListにasceding関数を送る
const onClickasc = () => {
    const ascending = myHistory.sort((a,b)=>{
        return a - b;
    })
    updateList(ascending);
}