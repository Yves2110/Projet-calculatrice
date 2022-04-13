const touches = [...document.querySelectorAll('.buton')];
const listekeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');
let res = document.getElementById("res");


document.addEventListener("keydown", (e) => {
    const valeur = e.keycode.toString();
    calculer(valeur)
})

document.addEventListener("click", (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    let calcul = null;
    if (listekeycode.includes(valeur)) {
        // console.log(listekeycode)
        switch (valeur) {
            case "8":
                ecran.textContent = "";
                break;
            case "13":
                calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listekeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
    res.value = calcul;
    // res.innerHTML = calcul;
}
window.addEventListener("error", (e) => {
    alert("je ne comprend pas votre opération de calcul :" + e.message)
})