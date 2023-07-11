let tabLinks=document.getElementsByClassName("tab-links");
let tabContents=document.getElementsByClassName("tab-contents");
const sideMenu=document.getElementById('sideMenu');


function openTab(tabName){
    for(let tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

function openMenu(){
    sideMenu.style.right="0";
}
function closeMenu(){
    sideMenu.style.right="-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwYiFSa5PpX0JLAqUw3D7EVAj4qnlxSe0Dz0lrMOIa5Gz9fT9buIEBrIBRVbHd3TrP4hw/exec'
const form = document.forms['submit-to-google-sheet'];
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message sent successfully";
            setTimeout(function (){
                msg.innerHTML=""
            },1000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})