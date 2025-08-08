    const textEl = document.getElementById("item");
    const listEl = document.getElementById("list");
    let items=[]
  

    function addItem() 
    {
        let item = textEl.value.trim();
     

        
        if (item ==="") return; 


        items.push(item);
        renderItems();
        
  

        textEl.value = "";

    }

    function renderItems()
    {
        listEl.innerHTML = "";
        for(let i=0;i<items.length;i++)
        {
            listEl.innerHTML += `
            <div>
                <ul>
                <li>
                <input type="checkbox" onchange="toggleChecked(this)">
                <label>${items[i]}</label>
                <button onclick="removeItem(${i})" onchange="toggleChecked(this)">x</button>
                </li>
                </ul>
            </div>
        `;
        }
    }
    function removeItem(index)
    {
        items.splice(index, 1); // remove 1 element at 'index'
        renderItems(); // refresh list
    }
    function toggleChecked(checkbox) {
    const label = checkbox.nextElementSibling; // label is right after the checkbox
    if (checkbox.checked) {
        label.classList.add("checked");
    } else {
        label.classList.remove("checked");
    }
}