var outputCard = document.querySelector(".outputCard");
var userEmail = document.getElementById("umail");
var userPassword = document.getElementById("upass");
var firstName = document.getElementById("ufirstname");
var lastName = document.getElementById("ulastname");
var fullName = firstName + lastName;
var male = document.getElementById("male");
var female = document.getElementById("female");
var weblink = document.getElementById("weblink");
var skill = document.getElementById("skill");
var form = document.querySelector("form");
var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function() {
   
        outputCard.innerHTML += `
        
        <div class="card">
        <div class="card-body">
        <ul>
        <li><p class="title"><b>Name:</b> ${firstName.value} ${lastName.value}</p></li>
        <li><p class="text"><b>Gender :</b>Male</p></li>
        <li> <p class="text"><b>E-mail:</b> ${userEmail.value}</p></li>
        <li><p class="text"><b>Address:</b> ${weblink.value}</p></li>
        <li><p class="text"><b>Skills:</b> ${skill.value}</p></li>
        </ul>
        </div>
        </div>`

        alert("Student Enrolled Successfully")
        form.reset()
    // }
})