let nickName = document.querySelector("#username");
let inputText = document.querySelector("#message");
let inputTime = document.querySelector("#time");
let button = document.querySelector("#submitButton");
let mainBoard = document.querySelector(".allMessages")
/* This will be the variable used for the main message board*/
/*let mainContainer = document.querySelector(".allText");*/

let database = firebase.database().ref();

button.onclick = function updateDB(event) {
    event.preventDefault();
    let username = nickName.value;
    let message = inputText.value;
    let time = inputTime.value;

    nickName.value = "";
    inputText.value = "";
    inputTime.value = "";
    console.log(username + " : " + time + " : " + message);

    let value = {
        NAME: username,
        TIME: time,
        MESSAGE: message,
    
    } 

    database.push(value);

}
database.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData) {
    let row = rowData.val(); //retuns an object just like the "value" we pushed
    let username = row.NAME;
    let time = row.TIME;
    let message = row.MESSAGE;
    let p = document.createElement("p");
    let p1 = document.createElement("p");
    p.innerHTML = username + ": " + time;
    p1.innerHTML = message;
    mainBoard.appendChild(p);
    mainBoard.appendChild(p1);
} 