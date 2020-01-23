items_url = "http://localhost:3000/items"

document.addEventListener("DOMContentLoaded", () => {
    console.log("PAGE LOADED")

    fetchItems()
})

const fetchItems = () => {
    fetch("http://localhost:3000/items")
    .then(resp => resp.json())
    // .then(json => console.log(json))
    .then(json => itemsArray(json))
}

const itemsArray = (itemsArray) => {
    // itemsArray.forEach(item => console.log(item))
    itemsArray.forEach(item => makeItem(item))
}

// <!-- Show Items -->
// <div id="show-item">
// <div id="item-container">
//   <div id="item-image">
//     <div id="item-description">
//       <ul id="item-info">
        
//       </ul>
//     </div>
//   </div>
// </div>
// </div>


// create_table "items", force: :cascade do |t|
// t.string "image_url"
// t.string "name"
// t.integer "times_worn"
// t.boolean "favorite"
// t.integer "user_id", null: false
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// t.index ["user_id"], name: "index_items_on_user_id"
// end

// const appendItem = (item) =>{
//     let showItem = document.getElementById("show-item")

// } 

const makeItem = (item) => {
    let showItem = document.getElementById("show-item")
    let itemDiv = document.getElementById("item-container")

    let img = document.createElement("img")
    img.classList.add("item-image")
    img.src = item.image_url

    let ul = document.createElement("ul")

    let nameLi = document.createElement("h2")
    nameLi.textContent = item.name

    let categoryLi = document.createElement("li")
    categoryLi.textContent = item.category

    let timesWornLi = document.createElement("li")
    timesWornLi.textContent = item.times_worn

    // iterate thru outfits array
    // let itemOutfitsLi = document.createElement("li")
    // itemOutfitsLi.textContent = item.outfit.name

    // favorite button


    // delete button
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Remove from closet"
    deleteBtn.addEventListener("click", () => {
        itemDiv.remove()
    })
    
    showItem.appendChild(itemDiv)
    itemDiv.appendChild(img)
    itemDiv.appendChild(ul)
    itemDiv.appendChild(nameLi)
    itemDiv.appendChild(categoryLi)
    itemDiv.appendChild(timesWornLi)
    itemDiv.appendChild(deleteBtn)
    // itemDiv.appendChild(itemOutfitsLi)

    // console.log(item)
}

// add deleteItem() to 
// const deleteItem = (item) => {
//     fetch(`http://localhost:3000/items/${item}`, {
//         method: "DELETE"
//     })
// }