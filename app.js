const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const input = document.querySelector("#fruit");
const search = document.querySelector(".search");
const clear = document.querySelector(".clear");
const container = document.querySelector(".container");


// sort the fruits in ascending order
const sortedFruits = fruit.sort();

// Execute function on keyup
input.addEventListener("keyup", (e) =>{

    // Initially remove all the elements (If a user erases a letter or add new letter then clean previous output)
    removeElements();




    for (let i of sortedFruits) 
    {
        // user input convert to lowercase and compare with string



        if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value !== "") {
            // Now li elements will be created
            const listItem = document.createElement("li");

            // create common class name
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayFruits('" + i +"')");

            // When Matched, display in bold

            let words = "<b>" + i.substring(0, input.value.length) + "</b>"; 
            words+= i.substring(input.value.length);
            

            // display the items in array
            listItem.innerHTML = words;
            document.querySelector(".list").appendChild(listItem);
            
        }
    }
});

function displayFruits(value){
    input.value = value;
    removeElements();
}

function removeElements(){
    const items = document.querySelectorAll(".list-items");
    items.forEach((items) => {
        items.remove();
    })
}
{/* <i class="fa-solid fa-arrow-right"></i> */}

// code for onclick search icon
search.onclick = () =>{
    if(container.classList.toggle("active")){
        
        container.style.overflow = "visible";
        
    }

    else{
        container.style.overflow = "hidden"
    }
    
}


// Code for clear icon button
clear.onclick = () =>{
    input.value = "";
    removeElements()
}