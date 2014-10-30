var save = {
  protons = 0,
  proton_add = 0;}


function MProton(val) {
    protons = protons + val;
    if (protons == 1) {
        document.getElementById("protoncount").innerHTML = "1 Proton";
    }
    else {
        document.getElementById("protoncount").innerHTML = carrots + " Protons";
}
