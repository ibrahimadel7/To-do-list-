    const textEl = document.getElementById("item");
    const listEl = document.getElementById("list");
    let items=[]

    function addItem() {
        let item = textEl.value.trim();

        
        if (item === null) return; // skip empty input


        items.push(item);
        listEl.innerHTML += `
            <div>
                <ul>
                <li>
                <input type="checkbox">
                <label>${item}</label>
                </li>
                </ul>
            </div>
        `;
  

        textEl.value = ""; // clear the input

    }