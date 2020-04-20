'use strict'

{
  const myStorage = function(todo) {
    this.app = todo; //アプリ名
    this.storage = localStorage; //ストレージ種類
    this.data = JSON.parse(this.storage[this.app] || '[]');
  };
  
  myStorage.prototype = {
    getItem: function(key) {
      return this.data[key];
    },
    setItem: function(key, value) {
      this.data[key] = value;
    },
    save: function() {
      this.storage[this.app] = JSON.stringify(this.data);
    }
  };
  
  let i = 0;
  let newCell = null;
  const table = document.getElementById('targetTable');
  const complete_button = '<i class="fas fa-check" onclick="completeRow(this)"></i>'; //完了ボタン生成
  const delete_button = '<i class="fas fa-trash-alt" onclick="deleteRow(this)"></i>'; //削除ボタン生成
  let storage = new myStorage('todo');
  
  //リロード時のhtml組み立て処理
  for (i = 0; i < storage.data.length; i++ ) { //localStorage内のitem数、繰り返す
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
  
  document.getElementById('btn').addEventListener('click', () => {
    const text = document.getElementById('Text'); //内容取得
    const new_row = table.insertRow();

    if (i === 0) {
      for (i = 0; i < storage.data.length; i++) {
        //storageのdata[i]を最後の値に設定
      };
    };
    // 完了ボタン追加
    newCell = new_row.insertCell();
    newCell.innerHTML = complete_button;

    // text追加
    newCell = new_row.insertCell();
    newCell.textContent = text.value;
    storage.setItem(i, text.value);
    storage.save();

    // 削除ボタン追加
    newCell = new_row.insertCell();
    newCell.innerHTML = delete_button;

    // textクリア&focus
    text.value = '';
    text.focus();
    i +=1;
  });
}


