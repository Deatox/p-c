var save = {
    protons:0
    neutrons:0
    electrons:0
}

function Proton(val) {
    save.protons = save.protons + val;
    if (save.protons == 1) {
        document.getElementById("protoncount").innerHTML = "1 Proton";
    }
    else {
        document.getElementById("protoncount").innerHTML = save.protons + " protons";
}
}

function Neutron(val) {
    save.protons = save.neutrons + val;
    if (save.neutrons == 1) {
        document.getElementById("neutroncount").innerHTML = "1 neutron";
    }
    else {
        document.getElementById("neutroncount").innerHTML = save.neutron + " neutron";
}
}

function Electron(val) {
    save.electrons = save.electrons + val;
    if (save.electrons == 1) {
        document.getElementById("electroncount").innerHTML = "1 Electron";
    }
    else {
        document.getElementById("electroncount").innerHTML = save.electrons + " Electrons";
}
}
