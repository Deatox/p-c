var save = {
    protons: 0;
}
function Proton(val) {
    save.protons = save.protons + val;
    if (save.protons == 1) {
        document.getElementById("protoncount").innerHTML = "1 Proton";
    }
    else {
        document.getElementById("protoncount").innerHTML = save.protons + " Protons";
}
}
