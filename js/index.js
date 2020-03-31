'use strict'

{
  document.getElementById('btn').addEventListener('click', () => {
    const Table = document.getElementById('targetTable');
    const NewRow = Table.insertRow();
    const Td = document.createElement('td');

    const Date = document.getElementById('Date'); //日付取得
    const Text = document.getElementById('Text'); //内容取得
    const CompleteButton = '<input type="button" value="完了" onclick="completeRow(this)" />'; //完了ボタン生成
    const DeleteButton = '<input type="button" value="削除" onclick="deleteRow(this)" />'; //削除ボタン生成

    
    // 日付追加
    let newCell = NewRow.insertCell();
    newCell.textContent = Date.value;

    // text追加
    newCell = NewRow.insertCell();
    newCell.textContent = Text.value;

    // 完了ボタン追加
    newCell = NewRow.insertCell();
    newCell.innerHTML = CompleteButton;

    // 削除ボタン追加
    newCell = NewRow.insertCell();
    newCell.innerHTML = DeleteButton;

    // textクリア&focus
    Text.value = '';
    Text.focus();
  });
}