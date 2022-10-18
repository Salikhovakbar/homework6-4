const choiceLocation = document.getElementById("btn-choice");
const btnDone = document.getElementById("btn-complete");
const boxRegistr = document.querySelector(".box-registr");
const btnChooseCountry = document.querySelector("#btn-choice")
const selectCountries = document.getElementById("selection-countries")
btnChooseCountry.addEventListener('click', () => {
    boxRegistr.classList.add("box-add")

})
btnDone.addEventListener('click', () => {
    boxRegistr.classList.remove("box-add");
    btnChooseCountry.innerHTML = selectCountries.value
})
const selectionQuality = document.querySelector("#choices-of-quality");
const headerInput = document.querySelector(".search-header")
selectionQuality.addEventListener("click", () => {
    headerInput.value = selectionQuality.value
})
const btnSearch = document.querySelector(".bi-search");
btnSearch.addEventListener('click', () => {
    headerInput.value = "";
}) 
const vectorChoice = document.querySelector(".bi-arrow-down-short")
const languageIllustr = document.querySelector(".illustration-language")
const languageBox = document.querySelector(".language-choice");
vectorChoice.addEventListener('click', () => {
    languageIllustr.classList.toggle("language-items")
    languageBox.classList.toggle("language-items")
})
const flagImg = document.querySelector(".flag");
const languageEnglish = document.getElementById("language-english");
const languageRussian = document.getElementById("language-russian");
const languageUzbek = document.getElementById("language-uzbek");
languageEnglish.addEventListener('click', () => {
if(flagImg.src !== ""){
    flagImg.src = ""
}
flagImg.src = "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
})
languageRussian.addEventListener('click', () => {

    if(flagImg.src !== ""){
        flagImg.src = ""
    }
    flagImg.src = "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg";
})
languageUzbek.addEventListener('click', () => {
    
if(flagImg.src !== ""){
    flagImg.src = ""
}
    flagImg.src = "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg";
})
const menuBtn = document.querySelector(".bi-list");
const navBox = document.querySelector(".navbar-box");
menuBtn.addEventListener('click', () => {
navBox.classList.add("nav-active")
})
const closeBtn = document.querySelector(".bi-x-square");
closeBtn.addEventListener('click', () => {
    navBox.classList.remove("nav-active")
})
const total = document.querySelector("#total-input");
let totalPrice = 
btn.addEventListener('click', () => {
    total.value = +total.value +1 
})
btnTwo.addEventListener('click', () => {
    total.value = +total.value +1
})
btnThree.addEventListener('click', () => {
    total.value = +total.value +1
})