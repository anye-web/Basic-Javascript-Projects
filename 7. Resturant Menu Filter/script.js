// Items
const menu = [
  {
    id: 1,
    title: "Grill Cheese",
    category: "dinner",
    price: 15.99,
    img: "./img/img-1.jpg",
    desc: "I'm a baby woke milksshif wolf butters live-edge blue bottle, hammack freegan copper mug whatever cold-pressed.",
  },
  {
    id: 2,
    title: "Chocolate Cake",
    category: "breakfast",
    price: 13.99,
    img: "./img/img-2.jpg",
    desc: "rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    id: 3,
    title: "Burger and Fries",
    category: "lunch",
    price: 20.99,
    img: "./img/img-3.jpg",
    desc: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .",
  },
  {
    id: 4,
    title: "Toasted Egg",
    category: "breakfast",
    price: 10.99,
    img: "./img/img-4.jpg",
    desc: "urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in.",
  },
  {
    id: 5,
    title: "Shrimp Shake",
    category: "shake",
    price: 7.99,
    img: "./img/img-5.jpg",
    desc: "I'm a baby woke milksshif wolf butters live-edge blue bottle, hammack freegan copper mug whatever cold-pressed.",
  },
  {
    id: 6,
    title: "fried Shrimps",
    category: "dinner",
    price: 23.99,
    img: "./img/img-7.jpg",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
  {
    id: 7,
    title: "Hot Spicy Burger",
    category: "lunch",
    price: 16.99,
    img: "./img/img-8.jpg",
    desc: "I'm a baby woke making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin.",
  },
  {
    id: 8,
    title: "Fruit Juice",
    category: "juice",
    price: 26.99,
    img: "./img/img-9.jpg",
    desc: "I'm a baby woke making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin.",
  },
];

// Ui Elements
const SectionContent = document.querySelector(".content");
const btnContainer = document.querySelector(".btn-container");

// Listening to window for content load
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuBtn();
});

function displayMenuItems(menuItems) {
  // Building the each article and obtaining article from the menu array
  let displayMenu = menuItems.map(function (item) {
    return `  
           
      <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="menu-img" />
        <div class="menu-info">
          <div class="menu-title">
            <h2 class="secondary-heading">${item.title}</h2>
            <p class="price">💲${item.price}</p>
          </div>
          <p class="menu-decription">
            ${item.desc}
          </p>
        </div>
      </article>
    `;
  });

  // Using the Join property to come uo with single elements.
  displayMenu = displayMenu.join("");

  SectionContent.innerHTML = displayMenu;
}

// Buttom
function displayMenuBtn() {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoriesBtn = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id=${category}>
        ${category}
      </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoriesBtn;
  // Selecting the btn only after the dom have loaded
  const filterBtn = document.querySelectorAll(".filter-btn");

  // Filter Items
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;

      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      // Displaying the Items
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
