//your code here!
const list = document.getElementById('list');

// Add 10 list items by default
for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `List item ${i}`;
  list.appendChild(listItem);
}

// Add 2 more list items when the user reaches the end of the list
list.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = list;
  if (scrollTop + clientHeight >= scrollHeight) {
    for (let i = 1; i < 2; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `List item ${list.children.length + i}`;
      list.appendChild(listItem);
    }
  }
});