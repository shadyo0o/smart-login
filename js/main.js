

var warnInput =document.getElementById("warn")
var acceptInput =document.getElementById("accept")
var nameInput=document.getElementById("name")
var emailInput=document.getElementById("email");
var passInput=document.getElementById("pass");
var emailError=document.getElementById("emailError");
var emailError1=document.getElementById("emailError1");


var regex={
    name:{
        value:/^[a-z]{1,}$/i,
        Status:false,
    },
    email:{
value:/^.{1,15}@(gmail|yahoo)\.com$/,
Status:false
    },
    pass:{
        value:/^[1-9]{3,8}$/,
        status:false,
    },
}

// ********************************* page sign up************************************

function validateName(){
    if(regex.name.value.test(nameInput.value)){
        localStorage.setItem("name",JSON.stringify(nameInput.value))
        regex.name.status=true
        nameInput.classList.remove("is-invalid")
        nameInput.classList.add("is-valid")
        return true
        }else{
            regex.name.status=false
            nameInput.classList.remove("is-valid")
            nameInput.classList.add("is-invalid")
            return false
            }
}

var emailContainer=[]

function validateEmail(){
    if(regex.email.value.test(emailInput.value)){
        localStorage.setItem("email",JSON.stringify(emailInput.value))
        emailContainer.push(JSON.parse(localStorage.getItem("email")))
        regex.email.status=true
        emailInput.classList.remove("is-invalid")
        emailInput.classList.add("is-valid")
        return true
        }
        else{
            regex.email.status=false
            emailInput.classList.remove("is-valid")
            emailInput.classList.add("is-invalid")
            return false
            }
}



function validatePass()
{
    if(regex.pass.value.test(passInput.value)){
        regex.pass.status=true
        passInput.classList.remove("is-invalid")
        passInput.classList.add("is-valid")

        return true
        }else{
            regex.pass.status=false
            passInput.classList.remove("is-valid")
            passInput.classList.add("is-invalid")
            return false
            }
}
var container=[];

function signup(){
    

    if(validateName() && validateEmail() && validatePass()){

        container.push({
            name:nameInput.value,
            email:emailInput.value,
            pass:passInput.value,
    })
    console.log(container);
    localStorage.setItem("login" ,JSON.stringify(container) )
    acceptInput.classList.remove("d-none")
warnInput.classList.add("d-none")

loginPage()

        }else if (validateEmail()!=true){
            emailError.classList.remove("d-none")
            warnInput.classList.add("d-none")
        }
        else{
            warnInput.classList.remove("d-none")
            }
}

function loginPage(){
    window.location.href="index.html"
}


// *************************************************************

// ************************ page login*************************



var email1input=document.getElementById("email1");
var pass1input=document.getElementById("pass1");
var requiredinput=document.getElementById("req");

function login(){
    var loginData=JSON.parse(localStorage.getItem("login"));
    console.log(loginData);
    
    for(var i=0;i<loginData.length;i++){
        if(email1input.value===loginData[i].email && pass1input.value===loginData[i].pass)
            {
                acceptInput.classList.remove("d-none")
                warnInput.classList.add("d-none")
                console.log(loginData);

                accept()
                return 
            }else if(email1input.value=="" || pass1input.value==""){
                requiredinput.classList.remove("d-none");
                acceptInput.classList.add("d-none")
                warnInput.classList.add("d-none")

            }
            else{
                warnInput.classList.remove("d-none")
                acceptInput.classList.add("d-none")
                requiredinput.classList.add("d-none");
return 
            }
}

}
// **************************************************



// **************** go to final page ********************
function accept()
{
    window.location.href="page3.html";
}



document.getElementById("userName").innerHTML= `Welcome ${JSON.parse(localStorage.getItem("name"))}`;

// *******************************************************

