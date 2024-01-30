let counterelement = document.getElementById("countervalue");

function onincrement() {
    let previouscounterelement = counterelement.textContent;
    let presentcounterelement = parseInt(previouscounterelement) + 1;
    counterelement.textContent = presentcounterelement;
    if (presentcounterelement > 0) {
        counterelement.style.color = "green";
    } else if (presentcounterelement < 0) {
        counterelement.style.color = "red";
    } else {
        counterelement.style.color = "black";
    }
}

function ondecrement() {
    let previouscounterelement = counterelement.textContent;
    let presentcounterelement = parseInt(previouscounterelement) - 1;
    counterelement.textContent = presentcounterelement;
    if (presentcounterelement > 0) {
        counterelement.style.color = "green";
    } else if (presentcounterelement < 0) {
        counterelement.style.color = "red";
    } else {
        counterelement.style.color = "black";
    }
}

function onReset() {
    let presentcounterelement = 0;
    counterelement.textContent = presentcounterelement;
    counterelement.style.color = "black";

}