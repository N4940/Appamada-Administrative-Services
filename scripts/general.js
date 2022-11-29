const openPopup = document.querySelectorAll("[data-popup-opener]")
const overlay = document.getElementById("overlay")


console.log(openPopup + "button")
openPopup.forEach(element => {
    console.log(element)
    element.addEventListener('click', () => {
        console.log("clicked and method")
        console.log(element)
        open(document.querySelector(element.dataset.popupOpener))
    })
})

overlay.addEventListener('click', () => {
    const popup = document.querySelectorAll("[data-popup]")
    popup.forEach(element => {
        close(element) 
    })
})

function open(popup){
    if(popup == null) return console.log("null Popup")
    popup.classList.add("active");
    overlay.classList.add('active');
}
function close(popup){
    if(popup == null) return console.log('null popup')
    popup.classList.remove('active');
    overlay.classList.remove('active');
}