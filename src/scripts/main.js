'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  for (const key in data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.textContent = key;

    ul.append(li);
    element.append(ul);

    if (Object.keys(data[key]).length) {
      createTree(li, data[key]);
    }
    
  }
}

createTree(tree, food);
