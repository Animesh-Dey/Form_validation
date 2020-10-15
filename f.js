const form=document.getElementById('form');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
const messagecontainer=document.querySelector('.message-container');
const message=document.getElementById('message');

let isvalid=false;
let passwordmatch=false;

function validateform(){
    //using constraint API
    isvalid=form.checkValidity();
    //console.log(isvalid);
    //style main message for an error
   if(!isvalid)
   {
    message.textContent='Please fill out all fields';
    message.style.color='red';
    messagecontainer.style.borderColor='red';
    return;
   }
   //check to see if password match
   if(password1.value===password2.value){
       passwordmatch=true;
       password1.style.borderColor='green';
       password2.style.borderColor='green';
   }
   else{
    passwordmatch=false;
    message.textContent='Make sure passwords match';
    message.style.color='red';
    messagecontainer.style.borderColor='red';
    password1.style.borderColor='red';
    password2 .style.borderColor='red';
    return;
   }
   //if form is valid and password is match
   if(isvalid && passwordmatch)
   {
      message.textContent='Succesfully registered';
      message.style.color='green';
      messagecontainer.style.borderColor='green';
   }
}
function processformdata(e){
    e.preventDefault();
    //validate form
    validateform();
    //console.log(e);

    //submit data if valid
    if(isvalid && passwordmatch)
    {
        storeformdata();
    }
}
function storeformdata(){
    const user={
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value,
    };
    console.log(user);
}

//eventlistner
form.addEventListener('submit',processformdata);