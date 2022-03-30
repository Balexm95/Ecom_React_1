

 
    const products =[
         
    
        {
        "id":1,
        "productName": "Love Mr. Happy Tee",
        "category": "Culture",
        "price": 40,
        "image": "images/tshirt1.jpeg"
    },
    {
        "id":2,
        "productName": "Grateful Dead Tie Dye Tee",
        "category": "Bands",
        "price": 45,
        "image": "images/tshirt2.jpeg"
    },
    {
        "id":3,
        "productName": "DefLepard Tie Dye Tee",
        "category": "Bands",
        "price": 45,
        "image": "images/tshirt3.jpeg"
    },
    {
        "id":4,
        "productName": "Jimmy Hendrix Tee",
        "category": "Musicians",
        "price": 40,
        "image": "images/tshirt4.jpeg"
    },
    {
        "id":5,
        "productName": "Tune Squad Tee",
        "category": "Classic Shows",
        "price": 40,
        "image": "images/tshirt5.jpeg"
    },
    {
        "id":6,
        "productName": "Blondie Tee",
        "category": "Bands",
        "price": 40,
        "image": "images/tshirt6.jpeg"
    },
    {
        "id":7,
        "productName": "Jaws Tee",
        "category": "Classic Movies",
        "price": 40,
        "image": "images/tshirt7.jpeg"
    },
    {
        "id":8,
        "productName": "Beatles Tee",
        "category": "Bands",
        "price": 45,
        "image": "images/tshirt8.jpeg"
    },
    {
        "id":9,
        "productName": "Whitney Houston Tee",
        "category": "Musicians",
        "price": 45,
        "image": "images/tshirt9.jpeg"
    },
    {
        "id":10,
        "productName": "Lisa Simpson Tee",
        "category": "Classic Shows",
        "price": 35,
        "image": "images/tshirt10.jpeg"
    },
    {
        "id":11,
        "productName": "Woodstock Tee",
        "category": "Culture",
        "price": 35,
        "image": "images/tshirt11.jpeg"
    },
    {
        "id":12,
        "productName": "Rose Distressed Tee",
        "category": "Bands",
        "price": 40,
        "image": "images/tshirt12.jpeg"
    }
];
export default products;

// for (let i of products.data) {
//     //Create Card
//     let card = document.createElement("div");
//     //Card should have category and should stay hidden initially
//     card.classList.add("card", i.category, "hide");
//     //image div
//     let imgContainer = document.createElement("div");
//     imgContainer.classList.add("image-container");
//     //img tag
//     let image = document.createElement("img");
//     image.setAttribute("src", i.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);
//     //container
//     let container = document.createElement("div");
//     container.classList.add("container");
//     //product name
//     let name = document.createElement("h5");
//     name.classList.add("product-name");
//     name.innerText = i.productName.toUpperCase();
//     container.appendChild(name);
//     //price
//     let price = document.createElement("h6");
//     price.innerText = "$" + i.price;
//     container.appendChild(price);
//     card.appendChild(container);
//     document.getElementById("products").appendChild(card);
//   }
//   //parameter passed from button (Parameter same as category)
//   function filterProduct(value) {
//     //Button class code
//     let buttons = document.querySelectorAll(".button-value");
//     buttons.forEach((button) => {
//       //check if value equals innerText
//       if (value.toUpperCase() == button.innerText.toUpperCase()) {
//         button.classList.add("active");
//       } else {
//         button.classList.remove("active");
//       }
//     });
//     //select all cards
//     let elements = document.querySelectorAll(".card");
//     //loop through all cards
//     elements.forEach((element) => {
//       //display all cards on 'all' button click
//       if (value == "all") {
//         element.classList.remove("hide");
//       } else {
//         //Check if element contains category class
//         if (element.classList.contains(value)) {
//           //display element based on category
//           element.classList.remove("hide");
//         } else {
//           //hide other elements
//           element.classList.add("hide");
//         }
//       }
//     });
//   }
//   //Search button click
//   document.getElementById("search").addEventListener("click", () => {
//     //initializations
//     let searchInput = document.getElementById("search-input").value;
//     let elements = document.querySelectorAll(".product-name");
//     let cards = document.querySelectorAll(".card");
//     //loop through all elements
//     elements.forEach((element, index) => {
//       //check if text includes the search value
//       if (element.innerText.includes(searchInput.toUpperCase())) {
//         //display matching card
//         cards[index].classList.remove("hide");
//       } else {
//         //hide others
//         cards[index].classList.add("hide");
//       }
//     });
//   });
//   //Initially display all products
//   window.onload = () => {
//     filterProduct("all");
//   };
//   export default filterProducts;