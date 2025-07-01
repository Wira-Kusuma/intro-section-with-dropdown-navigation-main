let feartures = document.getElementById("feartures");
let company = document.getElementById("company");

let fearturesDrop = document.querySelector(".fearturesDrop");
let companyDrop = document.querySelector(".companyDrop");

feartures.addEventListener("click", function() {
    fearturesDrop.classList.toggle("show");
});

company.addEventListener("click", function() {
    companyDrop.classList.toggle("show");
});

// device

document.querySelector(".burger").addEventListener("click", function() {
    document.querySelector("nav").classList.add("show");
    document.querySelector(".lg").classList.add("show");
});
document.getElementById("icon-close").addEventListener("click", function() {
    document.querySelector("nav").classList.remove("show");
    document.querySelector(".lg").classList.remove("show");
});