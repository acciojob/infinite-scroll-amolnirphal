//your code here!
const list = document.getElementById("infi-list");

let count = 1;

// Add initial 10 items
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + count++;
  list.appendChild(li);
}

// Infinite scroll
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // Add 2 more items
    for (let i = 0; i < 2; i++) {
      const li = document.createElement("li");
      li.textContent = "Item " + count++;
      list.appendChild(li);
    }
  }
});
