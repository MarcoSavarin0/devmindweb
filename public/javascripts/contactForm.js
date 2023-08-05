var tablinks = document.getElementsByClassName("tabLinks");
var tabcontents = document.getElementsByClassName("tabContents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("activeLink");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("activeTab");
    }
    event.currentTarget.classList.add("activeLink");

    document.getElementById(tabname).classList.add("activeTab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-180px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyv5SyypDiQyWIiXkI6ZHQawOkg11o1zruJO7GHVt5i8N1ro5O5D5Io2xrJLjW7L_eVOA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Your information has been succesfully submited!"
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
})
