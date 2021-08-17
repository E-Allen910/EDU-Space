let nickName = document.querySelector("#username");
let inputText = document.querySelector("#message");
let button = document.querySelector("#submitButton");
let mainContainer = document.querySelector(".allText");

let database = firebase.database().ref();

button.onclick = function updateDB(event) {
    event.preventDefault();
    let username = nickName.value;
    let message = inputText.value;

    nickName.value = "";
    inputText.value = "";
    console.log(username + " : " + message);

    let value = {
        NAME: username,
        MESSAGE: message,
    } 

    database.push(value);

}
database.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData) {
    let row = rowData.val(); //retuns an object just like the "value" we pushed
    let username = row.NAME;
    let message = row.MESSAGE;
    let p = document.createElement("p");
    p.innerHTML = username + ": " + message;
    mainContainer.appendChild(p);
} 