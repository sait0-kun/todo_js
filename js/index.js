'use strict'

{
  document.getElementById('btn').addEventListener('click', () => {
    const table = document.getElementById('targetTable');
    const new_row = table.insertRow();
    const td = document.createElement('td');

    const date = document.getElementById('Date'); //日付取得
    const text = document.getElementById('Text'); //内容取得
    const complete_button = '<input type="button" value="完了" class="btn" onclick="completeRow(this)" />'; //完了ボタン生成
    const delete_button = '<input type="button" value="削除" class="btn" onclick="deleteRow(this)" />'; //削除ボタン生成


    // 日付追加
    let newCell = new_row.insertCell();
    newCell.textContent = date.value;

    // text追加
    newCell = new_row.insertCell();
    newCell.textContent = text.value;

    // 完了ボタン追加
    newCell = new_row.insertCell();
    newCell.innerHTML = complete_button;

    // 削除ボタン追加
    newCell = new_row.insertCell();
    newCell.innerHTML = delete_button;

    // textクリア&focus
    text.value = '';
    text.focus();
  });
}

