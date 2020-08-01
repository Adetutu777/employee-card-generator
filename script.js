// select ui elements to interact with
const employeeName = document.getElementById("name");
const employeeDepartment = document.getElementById("department");
const employeeId = document.getElementById("employee-id");
const newNote = document.getElementById("new-note");
const standupContainer = document.getElementById("standup-container");
const standupList = document.getElementById("standuplist-container");
const centerPics = document.getElementById("center-picture");
const standupCard = document.getElementById("standup-card");
const deleteCard = document.getElementById("delete-card");
const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");
const yesterdayInput = document.getElementById("yesterday");
const todayInput = document.getElementById("today");
const blockerInput = document.getElementById("blockers");
const LogoutButton = document.getElementById("log-out");

// get user and standups from local storage and convert to JSON
const user = JSON.parse(window.localStorage.getItem('loggedInUser'));
const staffId = user.username;
let standupArray = JSON.parse(window.localStorage.getItem(staffId));

//display user content on the left panee
let displayUser = function (employee) {
    employeeName.innerHTML= employee.username;
    employeeDepartment.innerHTML= employee.department;
    employeeId.innerHTML = employee.staffIdNo;
}

// create standup Items
let createStandupItems = function (standup) {
    const listItem = document.createElement("li");
    const bullet = document.createElement("img");
    const date = document.createElement("p");
    date.innerHTML = standup.date + " - " + standup.yesterday;
    const deleteItem = document.createElement("img");
    bullet.src = "images/bullet.png"
    deleteItem.src = "images/trash-can.png";
    bullet.classList.add("small");
    deleteItem.classList.add("tiny");

    //append items to the List item
    listItem.append(bullet);
    listItem.append(date);
    listItem.append(deleteItem);
    deleteItem.addEventListener("click", function(){
        deleteStandupNote(standup);
    });
    date.addEventListener("click", function() {
        editStandupNote(standup);
    })

    return listItem;
}

let displayStandups = function (standups) {
    standupList.innerHTML = "";

    if (standups === null) {
        return;
    }
    for (let i=0; i < standups.length; i++) {
        let listItem =createStandupItems(standups[i]);
        standupList.append(listItem);
    }
}

//show logo
let showLogo = function () {
    centerPics.classList.add("show");
    centerPics.classList.remove("hide");
    standupCard.classList.add("hide");
    standupCard.classList.remove("show");
    deleteCard.classList.add("hide");
    deleteCard.classList.remove("show");
}

//show standup
let showStandup = function () {
    centerPics.classList.toggle("hide");
    centerPics.classList.remove("show");
    standupCard.classList.add("show");
    standupCard.classList.remove("hide");
    deleteCard.classList.add("hide");
    deleteCard.classList.remove("show");

    yesterdayInput.value = "";
    todayInput.value = "";
    blockerInput.value = "";
}

//show delete
let showDelete = function () {
    centerPics.classList.add("hide");
    centerPics.classList.remove("show");
    standupCard.classList.add("hide");
    standupCard.classList.remove("show");
    deleteCard.classList.add("show");
    deleteCard.classList.remove("hide");
}

// to save standup
let saveStandup = function () {
    const saveYesterdayInput = yesterdayInput.value;
    const saveTodayInput = todayInput.value;
    const saveBlockerInput = blockerInput.value;
    // get the current date
    if(saveYesterdayInput === "" || saveTodayInput === "" || saveBlockerInput === "") {
        alert("All fields are required");
        return;
    }
    const today = new Date();
    const date = `${getMonth(today.getMonth())} ${today.getDate()}, ${today.getFullYear()}`;
    //create a standup object
    let standupObject = {
        yesterday: saveYesterdayInput,
        today: saveTodayInput,
        blockers: saveBlockerInput,
        date: date
        }
    if(standupArray === null) {
        standupArray = [];
    }
    standupArray.push(standupObject);
    window.localStorage.setItem(staffId, JSON.stringify(standupArray));
    showLogo();
    displayStandups(standupArray);
}

let getMonth = function (num) {
     switch (num) {
        case 0:
             return "January";
             break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
            break;
        default:
            return "None";
            break;
     }
}

const deleteStandupNote = function (standup) {
    showDelete();
    deleteButton.addEventListener("click", function(){
        for(let i=0; i < standupArray.length; i++) {
            if (standupArray[i].date === standup.date && standupArray[i].yesterday === standup.yesterday) {
                standupArray.splice(i, 1);
                break;
            }
        }
        window.localStorage.setItem(staffId, JSON.stringify(standupArray));
        showLogo();
        displayStandups(standupArray);
    })
}

//edit standup
const editStandupNote = function (standup) {
    showStandup();
    yesterdayInput.value = standup.yesterday;
    todayInput.value = standup.today;
    blockerInput.value = standup.blockers;
}
newNote.addEventListener("click", showStandup);
saveButton.addEventListener("click", saveStandup);

//Logout 
LogoutButton.addEventListener("click", function() {
    location.assign("./index.html");
})












displayUser(user, standupArray);
displayStandups(standupArray);
showLogo();
