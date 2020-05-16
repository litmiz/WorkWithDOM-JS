document.getElementById('addBtn').addEventListener('click', function () {
    addItemToShopList(document.getElementById('addItem').value);
})

function addItemToShopList(addItem) {
    var listItem = document.createElement('li');
    var chb = document.createElement('input');
    chb.setAttribute("type", "checkbox");
    listItem.append(chb);
    listItem.append(addItem);
    listItem.classList.add('listItemCSS');
    document.getElementById ('shopList').appendChild(listItem);
}