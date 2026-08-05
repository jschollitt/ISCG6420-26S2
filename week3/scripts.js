function myFunction() {
    let myID = document.getElementById("myID");
    myID.innerHTML = "Updated!";
    window.alert("Askjdskjashdfkjeahf");
}

window.addEventListener("DOMContentLoaded", myFunction);

let i = 0;
if (i === 0) {
    console.log("success");
}
else if (i === 1) {
    console.log("Failure");
}
console.warn("What?")

for (let i = 0; i < 10; i++) {

}

while (i < 11) {
    console.log("yes");
    i++;
}