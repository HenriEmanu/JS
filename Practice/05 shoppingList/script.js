/*
  Capture 10 items to create a shopping list.
  
  After capturing the 10 items, print them, separated by commas.
*/

let items = [];

for(let item = 0; item < 10; item++) {
  let itemName = prompt("Enter item " + (item + 1));

  items[item] = itemName;
}

alert(items.join(', '));
