
			<input type="date" id="datum" placeholder="Vyplňte datum"><br></br>




const button = document.querySelector("#potvrdit");
const heslo = document.querySelector("#heslo");

const setWelcomeMessage = name => {
    document.querySelector("#welcome-message").innerHTML = `Hello <strong>${name}</strong>`;
}

button.addEventListener("click", event => {
    console.log(event.currentTarget.textContent)
});

setWelcomeMessage("Sam");




const getUserComment = () => {
    return document.querySelector("#heslo").value;
}

const userComment = document.querySelector("#heslo");
userComment.addEventListener("keyup", () => {
    console.log(getUserComment());
});