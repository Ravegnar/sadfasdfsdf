const getUserComment = () => {
    return document.querySelector("#heslo").value;
}

const userComment = document.querySelector("#heslo");
userComment.addEventListener("keyup", () => {
    console.log(getUserComment());
    getUserComment.map(element => {
        console.log(element)
    });
});
