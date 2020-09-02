function ordered_shopping(products, shopping_list) {
  // Your code here.
  // 1. find unique departments of the shopping_list in products list to optimize the route
  // declare hashmap for department and shopping list item
  let hashmap = {};
  let originalVisit = 1;
  let shopping_list_dept = [];
  // iterate through shopping_list,
  for (let i = 0; i < shopping_list.length; i++) {
      // find the department
    for (let j = 0; j < products.length; j++) {
      if (products[j][0] === shopping_list[i]) {
      // hashmap with key: department, value is list of shopping list
        shopping_list_dept.push([shopping_list[i], products[j][1]]);
        if (hashmap[products[j][1]] !== undefined) {
          hashmap[products[j][1]] === hashmap[products[j][1]].push(shopping_list[i]);
        } else {
          let tmp = [shopping_list[i]];
          hashmap[products[j][1]] = tmp;
        }
        break;
      }
    }
    if (i !== 0 && shopping_list_dept[i - 1][1] !== shopping_list_dept[i][1]) {
      originalVisit++;
    }
  }
  // 2. return difference between number of unique departments and shopping list length
  return originalVisit - Object.keys(hashmap).length;
//   return 0;
}

// DO NOT MODIFY BELOW THIS LINE

const shopping_list = [ 'Cheese', 'Potatoes', 'Grapes', 'Canned Corn' ]
const products = [
  [ 'Cheese', 'Dairy' ],
  [ 'Carrots', 'Produce' ],
  [ 'Potatoes', 'Produce' ],
  [ 'Canned Corn', 'Pantry' ],
  [ 'Romaine', 'Produce' ],
  [ 'Yogurt', 'Dairy' ],
  [ 'Flour', 'Pantry' ],
  [ 'Iceberg', 'Produce' ],
  [ 'Coffee', 'Pantry' ],
  [ 'Pasta', 'Pantry' ],
  [ 'Milk', 'Dairy' ],
  [ 'Grapes', 'Produce' ],
  [ 'Pasta Sauce', 'Pantry' ]
]

console.log(ordered_shopping(products, shopping_list));