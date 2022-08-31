const getFullName = () => {
    const hesla = document.querySelector("#sif-heslo").value;
    const ln = document.querySelector("#sif-text").value;
    return `${hesla} ${ln}`;
}

const zasifText = document.querySelector("#zasif-text");
const sifHeslo = document.querySelector("#sif-heslo");
const sifText = document.querySelector("#sif-text");

const updateFullName = () => {
    zasifText.textContent = getFullName();
}

sifHeslo.addEventListener("keyup", event => {
    updateFullName();
    console.log(event.currentTarget.value[1]);
    let bg = sifHeslo.value[2]
    console.log(bg)
    const zaznam = sifHeslo.value;


    
})
sifText.addEventListener("keyup", () => updateFullName());