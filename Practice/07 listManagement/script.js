/*

  Create a program that has a menu and displays the following message:
  
  Hello user! Enter the number of the desired option

    1. Add an item to the list
    2. Show registered items
    3. Exit the program
  
  --- 
  The program should capture the number entered by the user and display the following scenarios:

  If the user enters 1, they can add an item to a list
  If the user enters 2, they can see the registered items
    If no items are registered, display the message: 
      "There are no registered items"
  If the user enters 3, the application should exit.

*/

let options;
let items = [];

while(options != 3) {

  options =  Number(prompt(`
    Hello user! Enter the number of the desired option
    
    1. Add an item to the list
    2. Show registered items
    3. Exit the program`));
  
  switch(options) {
    
    case 1:
      let item = prompt("Enter the name of the item");
      items.push(item);
      break;

    case 2:
      if(items.length == 0) {
        alert("There are no registered items");
      } else {
        alert(items.join(', '));
      }
      break;

    case 3:
      alert("Goodbye");
      break;

    default:
      alert('Invalid option, please try again.');
  }
}

/*   Another option

  if(options == 1) {
    let item = prompt("Enter the name of the item")
    items.push(item) 
  }
  
  else if (options == 2) {
  
    if(items.length == 0) {
      alert("There are no registered items")
    } else {
      alert(items)
    }
  }
  else {
    alert("Goodbye")
  }

*/
