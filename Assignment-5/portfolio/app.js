
window.onload = () => {
    document.getElementById("body").style.opacity = "1";
}


document.addEventListener("DOMContentLoaded", function() {
    // Hide loader and logo after a delay
    setTimeout(function() {
        document.getElementById("body").style.opacity = "1";
        document.querySelector('.loader').style.display = 'none';
    }, 3000); // Adjust delay time (in milliseconds) as needed
});














// tootgle effects

const toggleBtn = document.querySelector(".bar");
const sideBar = document.querySelector(".sidebar");
const navLinks = document.querySelector(".navbar ul");
const croseBtn =document.querySelector(".xrosse");

toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    toggleBtn.style.display = "none";
    croseBtn.style.display = "block";
    navLinks.classList.toggle("active");
    sideBar.classList.toggle("active");
  
    

});
croseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.classList.remove("active");
    sideBar.classList.remove("active");
    croseBtn.classList.remove("active");
    toggleBtn.style.display = "block";
    croseBtn.style.display = "none";
})

// experience
const exp_btns = document.getElementsByClassName("exp-btns");
const tab_Contents = document.getElementsByClassName("tab-content");

function openTab(tabname){
    event.preventDefault();
    for( let exp_btn of exp_btns){
        exp_btn.classList.remove("active-exp");
    }
    for(let tab_Content of tab_Contents){
        tab_Content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-exp");
    document.getElementById(tabname).classList.add("active-tab")
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

































//tostify custom finctions
function showNotification(msg, type){
    let bgColor;
    switch(type){
        case  "success" :
            bgColor = "linear-gradient(to right, #1d976c, #93F9B9"
            break;
            case "error" :
                bgColor = "linear-gradient(to right, #93291e, #ed213a"
                break;
        default:
            bgColor = "#000"
            break;
    }


// tooftify code
Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: "bottom",
    position: "left",
    newWindow: true,
    stopOnFocus: true,
    style: {
        background: bgColor,
    },

}).showToast();


}