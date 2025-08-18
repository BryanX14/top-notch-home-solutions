
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// Tab switching functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    // Remove 'active-link' class from all tab links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    // Remove 'active-tab' class from all tab contents
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // Add 'active-link' to clicked tab
    event.currentTarget.classList.add("active-link");
    // Add 'active-tab' to corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}

// Side menu open/close functionality
function openmenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
}

function closemenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}

// Add event listeners for open and close menu buttons
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("openMenuButton").addEventListener("click", openmenu);
    document.getElementById("closeMenuButton").addEventListener("click", closemenu);
});

// Google Sheets form submission
/*const scriptURL = 'https://script.google.com/macros/s/AKfycbxeo5gllL9uMI3SOXbNj5l33xt_mTGT5l7zyp14Kp8YRxUiRBbYYiALx-U0OTEbF1A6wQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
*/
