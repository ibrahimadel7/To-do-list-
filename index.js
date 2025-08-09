const textEl = document.getElementById("item");
const listEl = document.getElementById("list");
let items = [];

function addItem() {
  let item = textEl.value.trim();
  if (item === "") return;

  items.push({ text: item, checked: false });
  renderItems();

  textEl.value = "";
}

function renderItems() {
  listEl.innerHTML = `<ul>`; // start ul once

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    listEl.innerHTML += `
      <li>
        <input type="checkbox" onchange="toggleChecked(this, ${i})" ${item.checked ? "checked" : ""}>
        <label class="${item.checked ? "checked" : ""}">${item.text}</label>
        <button onclick="removeItem(${i})" class="remove-btn">x</button>
      </li>
    `;
  }

  listEl.innerHTML += `</ul>`; // close ul once
}

function removeItem(index) {
  items.splice(index, 1);
  renderItems();
}

function toggleChecked(checkbox, index) {
  const label = checkbox.nextElementSibling;
  items[index].checked = checkbox.checked; // update state

  if (checkbox.checked) {
    label.classList.add("checked");
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  } else {
    label.classList.remove("checked");
  }
}
