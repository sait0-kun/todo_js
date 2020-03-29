'use strict'

{
  document.getElementById('btn').addEventListener('click', () => {
    const Table = document.getElementById('targetTable');
    const NewRow = Table.insertRow();
    const Td = document.createElement('td');
    let newCell = NewRow.insertCell();

    const Date = document.getElementById('Date')
    const Text = document.getElementById('Text')

    // 日付を追加
    newCell.textContent = Date.value;
    newCell.appendChild(Td);

    // textを追加
    newCell = NewRow.insertCell();
    newCell.textContent = Text.value;
    newCell.appendChild(Td);

    // textクリア&focus
    Text.value = '';
    Text.focus();
  });
}