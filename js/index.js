'use strict'

{
  document.getElementById('add').addEventListener('click', () => {
    const li = document.createElement('li');
    const date = document.getElementById('date');
    const text = document.getElementById('text');
    li.textContent = date.value + text.value;
    
    document.querySelector('ul').appendChild(li);
    
    text.value = '';
    text.focus();
  });
}