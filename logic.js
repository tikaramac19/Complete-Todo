// getting all the required elements

const inputbox = document.getElementById("takeValue");
const addbtn = document.getElementById("add-btn");
const todoList = document.getElementById("todolist");
const deleteAllBtn = document.getElementsByName("delete-all");

// logic for activating button and unactiviting add button
inputbox.onkeyup = () => {
  // when we put mouse on inputfield
  let userData = inputbox.value; // getting value of the input field
  if (userData.trim() != 0) {
    // if user values aren't only spaces
    addbtn.classList.add("active"); // active  the add button
  } else {
    addbtn.classList.remove("active"); // unactive the add button
  }
};

// logic for the getting input value into the  localstorage
const showTodo = () => {
  let userData = inputbox.value;
  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  listArr.push(userData); // pushing or adding user data
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTask(); // calling showtask function
};

// logic for showing the todo task inside the ul tag

const showTask = () => {
  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  const pendingNumber = document.querySelector(".pendingNumber");
  pendingNumber.textContent = listArr.length; // for counting the pending task
  let newLiTag = "";
  listArr.forEach((element, index) => {
    newLiTag += `<li> ${element}<span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span> </li>`;
  });
  todoList.innerHTML = newLiTag;
  inputbox.value = ""; // once task is added leaves the input field
};
showTask(); // calling showtask function

// delate task function

const deleteTask = (index) => {
  let getLocalStorage = localStorage.getItem("New Todo");
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, 1); // delete the particular indexted  task
  // after removing the list it can update the local storage
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTask();
};

// logic for deleting all the pending tasks

const deleteAll = () => {
  listArr = []; // empty an array

  // after delete the task again  it can update the local storage
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTask();
};
