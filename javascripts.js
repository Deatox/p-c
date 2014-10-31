function save() {
    var save = {
    protons: 0
    }
    localStorage.setItem("save",JSON.stringify(save));
}
function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
}
function reset(){
    localStorage.removeItem("save")
}
save()
load()
function Proton(val) {
    save.protons = save.protons + val;
    if (save.protons == 1) {
        document.getElementById("protoncount").innerHTML = "1 Proton";
    }
    else {
        document.getElementById("protoncount").innerHTML = save.protons + " Protons";
}
}
