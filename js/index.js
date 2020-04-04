'use strict'

let i = 0;
let storage = localStorage;
let newCell = null;
const table = document.getElementById('targetTable');
const complete_button = '<i class="fas fa-check" onclick="completeRow(this)"></i>'; //完了ボタン生成
const delete_button = '<i class="fas fa-trash-alt" onclick="deleteRow(this)"></i>'; //削除ボタン生成

{
  for (i = 0; i < storage.length; ++i ) {
    const new_row = table.insertRow();
    newCell = new_row.insertCell();
    newCell.innerHTML = complete_button;
    newCell = new_row.insertCell();
    newCell.textContent = storage.getItem(i);
    newCell = new_row.insertCell();
    newCell.innerHTML = delete_button;
  }
}



{
  document.getElementById('btn').addEventListener('click', () => {
    for (i = 0; i < storage.length; i++) {

    }
    const text = document.getElementById('Text'); //内容取得
    const new_row = table.insertRow();
    
    // 完了ボタン追加
    newCell = new_row.insertCell();
    newCell.innerHTML = complete_button;

    // text追加
    newCell = new_row.insertCell();
    newCell.textContent = text.value;
    storage.setItem(i, text.value);

    // 削除ボタン追加
    newCell = new_row.insertCell();
    newCell.innerHTML = delete_button;

    // textクリア&focus
    text.value = '';
    text.focus();
    i +=1;
  });
}

