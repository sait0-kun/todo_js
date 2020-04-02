'use strict'
let i = 0;
let strage = localStorage;
let newCell = null;
const table = document.getElementById('targetTable');
const complete_button = '<input type="button" value="完了" class="btn" onclick="completeRow(this)" />'; //完了ボタン生成
const delete_button = '<input type="button" value="削除" class="btn" onclick="deleteRow(this)" />'; //削除ボタン生成

{
  for (i = 0; i < strage.length; i++ ) {
    const new_row = table.insertRow();
    newCell = new_row.insertCell();
    newCell.textContent = strage.getItem(i);
    newCell = new_row.insertCell();
    newCell.innerHTML = complete_button;
    newCell = new_row.insertCell();
    newCell.innerHTML = delete_button;
  }
}

{
  document.getElementById('btn').addEventListener('click', () => {
    // const td = document.createElement('td');
    const text = document.getElementById('Text'); //内容取得
    const new_row = table.insertRow();
    
    // text追加
    newCell = new_row.insertCell();
    newCell.textContent = text.value;
    strage.setItem(i, text.value);

    // 完了ボタン追加
    newCell = new_row.insertCell();
    newCell.innerHTML = complete_button;

    // 削除ボタン追加
    newCell = new_row.insertCell();
    newCell.innerHTML = delete_button;

    // textクリア&focus
    text.value = '';
    text.focus();
    i +=1;
  });
}

