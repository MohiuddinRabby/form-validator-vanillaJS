const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show error message
function showError(input,message){
    const formControl = input.parentElement;
     formControl.className = 'form-control error';
     //small will do change the small tag in HTML
     const small = formControl.querySelector('small');
     small.innerText = message;
}
//show success message 
function showSuccess(input){
    const formControl = input.parentElement;
     formControl.className = 'form-control success';
}

//check for valid email
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (re.test(input.value.trim())) {
    //   showSuccess(input);
    // } else {
    //   showError(input, 'Email is not valid');
    // }
    return re.test(String(email).toLocaleLowerCase());
  }

//add event listener
form.addEventListener('submit',function(e){
    e.preventDefault();
//username required
    if(username.value === ''){
        showError(username,'username is required');
    }else{
        showSuccess(username);
    }
//email required
if(email.value === ''){
    showError(email,'email is required');
}else if(!checkEmail(email.value)){
    showError(email,'email is not valid');
}
else{
    showSuccess(email);
}
//password required
if(password.value === ''){
    showError(password,'password is required');
}else{
    showSuccess(password);
}
//password2 required
if(password.value === ''){
    showError(password2,'password 2 is required');
}else{
    showSuccess(password2);
}
});

