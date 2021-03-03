let input = document.querySelector('input');
let button = document.querySelector('#btn');


button.addEventListener('click', function (event) {
  let inputText = input.value;
  let listItem = document.createElement('li');
  document.querySelector('ul').append(listItem);
  listItem.innerHTML = inputText;
  input.value = '';
  listItem.className = "item";
  listItem.style.fontSize = '22px'
  let closer = document.getElementsByClassName("item")

  let i;
  for (i = 0; i < closer.length; i++) {
    closer[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
});