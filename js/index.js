'use strict'

let i = 0;
let storage = localStorage;
let newCell = null;
const table = document.getElementById('targetTable');
const complete_button = '<i class="fas fa-check" onclick="completeRow(this)"></i>'; //完了ボタン生成
const delete_button = '<i class="fas fa-trash-alt" onclick="deleteRow(this)"></i>'; //削除ボタン生成

{
  //リロード時のhtml組み立て処理
  for (i = 0; i < storage.length; i++ ) { //localStorage内のitem数、繰り返す
    let insertItem = { //itemをset
      com_btn: complete_button,
      sto: storage.getItem(i),
      del_btn: delete_button
    };
    const new_row = table.insertRow();
    
    for (let key in insertItem) { //insertItem内の配列を組み立て
      newCell = new_row.insertCell();
      newCell.innerHTML = insertItem[key];
    }
  }
}

{
  document.getElementById('btn').addEventListener('click', () => {
    for (i = 0; i < storage.length; i++) {
      //storageのkeyを最後の番号に設定
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

