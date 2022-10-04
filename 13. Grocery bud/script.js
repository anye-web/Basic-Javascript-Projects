"use strict";

//////////////////////////////////////////////////
// Ui Elements
//////////////////////////////////////////////////

const alertEl = document.querySelector(".alert");
const form = document.querySelector(".form-container");
const groceryInput = document.querySelector("#form-input");

const submitBtn = document.querySelector(".submit-btn");
const groceryContainer = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");

const clearBtn = document.querySelector(".btn-clear");

//////////////////////////////////////////////////
// edit options
//////////////////////////////////////////////////

let editElement;
let editFlag = false;
let editID = "";

//////////////////////////////////////////////////
// Event Listener
//////////////////////////////////////////////////

// Submit form
form.addEventListener("submit", addItem);
// Clear btn
clearBtn.addEventListener("click", clearItem);
// Load items
window.addEventListener("DOMContentLoaded", setUpItems);
//////////////////////////////////////////////////
// Functions
//////////////////////////////////////////////////

function addItem(e) {
  e.preventDefault();
  const value = groceryInput.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    // Create Ui Element
    createListItem(id, value);
    // Display Alert
    displayAlert("Item added to the list", "success");
    // Showing container
    groceryContainer.classList.add("show");
    // Add to local Storage
    addToLocalStorage(id, value);
    // set back to default
    setBackTOdefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("Value Change", "success");
    // Edit Local Storage
    editLocalStorage(editID, value);
    setBackTOdefault();
  } else {
    displayAlert("Please enter Value", "danger");
  }
}

//////////////////////////////////////////////////
// Displaying alerts
//////////////////////////////////////////////////
function displayAlert(text, action) {
  alertEl.textContent = text;
  alertEl.classList.add(`alert-${action}`);

  // Remove alert
  setTimeout(function () {
    alertEl.textContent = "";
    alertEl.classList.remove(`alert-${action}`);
  }, 3000);
}

// Clear btn
function clearItem() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      groceryList.removeChild(item);
    });
    groceryContainer.classList.remove("show");
    displayAlert("Empty List", "danger");
    setBackTOdefault();
    localStorage.removeItem("list");
  }
}

// Delete items
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  groceryList.removeChild(element);
  displayAlert("Item Remove from list", "danger");
  if (groceryList.children.length === 0) {
    groceryContainer.classList.remove("show");
  }
  setBackTOdefault();
  // Remove from local storage
  removeFromLocalStorage(id);
}
// edit items
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // Set edit Item
  groceryInput.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "Edit";
}

//////////////////////////////////////////////////
// Set back to default
//////////////////////////////////////////////////

function setBackTOdefault() {
  groceryInput.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

//////////////////////////////////////////////////
// Local storage
//////////////////////////////////////////////////
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();

  console.log(items);

  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
  // console.log(grocery);
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function setUpItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
    groceryContainer.classList.add("show");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  // add class
  element.classList.add("grocery-item");
  // Add Id
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  // Create Element
  element.innerHTML = ` <p class="text">${value}</p>
              <div class="btn-container">
                <button class="btn btn-outline edit-btn">
                  <ion-icon name="create-sharp"></ion-icon>
                </button>
                <button class="btn btn-outline delete-btn">
                  <ion-icon name="trash-sharp"></ion-icon>
                </button>
              </div>`;

  // adding event listern to delete and edit btn
  const editBtn = element.querySelector(".edit-btn");
  const deleteBtn = element.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  // Append Child
  groceryList.appendChild(element);
}
