let form = document.getElementsByTagName("form")[0];
let statusFirstname = document.querySelector(".statusMessage.firstname");
let statusLastname = document.querySelector(".statusMessage.lastname");
let statusUsername = document.querySelector (".statusMessage.username");
let statusPassword = document.querySelector(".statusMessage.password");
let statusEmail = document.querySelector(".statusMessage.email");
let statusStreetname = document.querySelector(".statusMessage.streetname");
let statusStreetnumber = document.querySelector(".statusMessage.streetnumber");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let status = true;

    statusFirstname.innerText ="";
    if (form.firstname.value == "") {
            statusFirstname.innerText = "Indtast dit fornavn";
            status = false;
    }

    statusLastname.innerText ="";
        if (form.lastname.value == "") {
            statusLastname.innerText = "Indtast dit efternavn";
            status = false; 
        }
      
    statusStreetname.innerText ="";
    if (form.streetname.value == "") {
        statusStreetname.innerText = "Indtast vejnavn";
        status = false; 
    }

    statusStreetnumber.innerText ="";
    if (form.streetnumber.value == "") {
            statusStreetnumber.innerText = "Indtast husnummer";
            status = false;
    }

        
    statusUsername.innerText ="";
        if (form.username.value == "") {
            statusUsername.innerText = "Indtast dit brugernavn";
            status = false; 
        }

        statusPassword.innerText ="";
        if (form.password.value == "") {
            statusPassword.innerText = "Indtast din adgangskode";
            status = false; 
        }

        statusEmail.innerText ="";
        if (form.email.value == "") {
            statusEmail.innerText = "Indtast dit brugernavn";
            status = false; 
        }

    if (!status)return;
        fetch("login.php") //dette sker når formularen er udfyldt korrekt
        
});


// Sådan kan man lave det mere simpelt. Med et loop. 
// let form =document.querySelector("form");
// let inputFields = form.querySelectorAll("input");
// let success = true;

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     inputFields.forEach(function(input){
// input.style.backgroundColor = "inherit";
// form.querySelector(".statusMessage." + input.name).innerText = "";

//         if (input.hasAttribute("required") && input.value =="" ){
//             input.style.backgroundColor = "red";
//             form.querySelector(".statusMessage." + input.name).innerText = "Udfyld dette felt";
//             succes = false;
//         }
//     });

//     if (!succes) return;
// });