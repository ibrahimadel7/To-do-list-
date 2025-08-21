
const textEl = document.getElementById("item");
const listEl = document.getElementById("list");
const form = document.getElementById("todoForm");

let items = [];

// --- Save to localStorage ---
function storeLocal(arr) {
  localStorage.setItem("myitems", JSON.stringify(arr));
}

// --- Load from localStorage on startup ---
function loadLocal() {
  const stored = localStorage.getItem("myitems");
  if (stored) {
    items = JSON.parse(stored);
  }
}

// Add new item
function addItem() {
  let item = textEl.value.trim();
  if (item === "") return;

  items.push({ text: item, checked: false });
  storeLocal(items);
  renderItems();

  textEl.value = "";
}

// Form submit
form.addEventListener("submit", function(e) {
  e.preventDefault();
  addItem();
});

// Render items
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

// Remove item
function removeItem(index) {
  items.splice(index, 1);
  storeLocal(items);
  renderItems();
}

// Toggle check/uncheck
function toggleChecked(checkbox, index) {
  const label = checkbox.nextElementSibling;
  items[index].checked = checkbox.checked;

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

  storeLocal(items);
}

// --- Load and render items when page loads ---
loadLocal();
renderItems();

