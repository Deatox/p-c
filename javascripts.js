protons = 0;

function Proton(val) {
    protons = protons + val;
    if (protons == 1) {
        document.getElementById("protoncount").innerHTML = "1 Proton";
    }
    else {
        document.getElementById("protoncount").innerHTML = protons + " Protons";
}
}
