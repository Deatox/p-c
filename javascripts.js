var protons = 0;
var neutrons = 0;
var electrons = 0;
var HAtoms = 0;


function FProton(val) {
    protons = protons + val;
    if (protons == 1) {
        document.getElementById("protoncount").innerHTML = "1 Proton";
    }
    else {
        document.getElementById("protoncount").innerHTML = protons + " Protons";
}
}

function FNeutron(val) {
    neutrons = neutrons + val;
    if (neutrons == 1) {
        document.getElementById("neutroncount").innerHTML = "1 Neutron";
    }
    else {
        document.getElementById("neutroncount").innerHTML = neutrons + " Neutrons";
}
}

function FElectron(val) {
    electrons = electrons + val;
    if (electrons == 1) {
        document.getElementById("electroncount").innerHTML = "1 Electron";
    }
    else {
        document.getElementById("electroncount").innerHTML = electrons + " Electrons";
}
}

function BuyH(val) {
    HAtoms = HAtoms + val;
    if (HAtoms == 1) {
        document.getElementById("HCount").innerHTML = "1 Hydrogen Atom";
    }
    else {
        document.getElementById("HCount").innerHTML = electrons + " Hydrogen Atoms";
}
}
