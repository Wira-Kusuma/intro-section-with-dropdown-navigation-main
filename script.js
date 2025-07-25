const feartures = document.getElementById("feartures");
const company = document.getElementById("company");

const fearturesDrop = document.querySelector(".fearturesDrop");
const companyDrop = document.querySelector(".companyDrop");

feartures.addEventListener("click", function() {
    fearturesDrop.classList.toggle("show");
});

company.addEventListener("click", function() {
    companyDrop.classList.toggle("show");
});

// device

document.querySelector(".burger").addEventListener("click", function() {
    document.querySelector("nav").classList.add("showd");
    document.querySelector(".lg").classList.add("showd");
});
document.getElementById("icon-close").addEventListener("click", function() {
    document.querySelector("nav").classList.remove("showd");
    document.querySelector(".lg").classList.remove("showd");
});