const sendvalue = ()=>{
    var firstName = document.signupform.firstName.value;
    var lastName = document.signupform.lastName.value;
    var email = document.signupform.email.value;
    var dateOfBirth = document.signupform.dateOfBirth.value;
    var mobileNumber = document.signupform.mobileNumber.value;
    var password = document.signupform.password.value;
    var confirmPassword = document.signupform.confirmPassword.value;


    if(firstName ==''){
        //alert('Enter your First Name');
        document.getElementById("show-alert").innerHTML = "Enter your First Name";
        return false;
    }else if(lastName == ''){
        document.getElementById("show-alert").innerHTML ="Enter your Last Name";
        return false;
    }else if(email == ''){
        document.getElementById("show-alert").innerHTML ="Enter your Email Id";
        return false;
    }else if(dateOfBirth == ''){
        document.getElementById("show-alert").innerHTML ="Enter your Date of Birth";
        return false;
    }else if ( mobileNumber == '') {
        document.getElementById("show-alert").innerHTML ="Please enter your Mobile Number";
        return false;
    }else if(mobileNumber.length < 10){
        document.getElementById("show-alert").innerHTML ="Mobile Number must be 10 characters";
        return false;
    }else if(mobileNumber.length > 10){
        document.getElementById("show-alert").innerHTML ="Mobile Number equal to 10 characters";
        return false;
    }else if(password == ''){
        document.getElementById("show-alert").innerHTML ="Enter your Password";
        return false;
    }else if(password.length < 8) {
        document.getElementById("show-alert").innerHTML ="Password must be at least 8 characters long";
        return false;
    }else if(confirmPassword == ''){
        document.getElementById("show-alert").innerHTML ="Confirm your password";
        return false;
    }else if(password!= confirmPassword){
        document.getElementById("show-alert").innerHTML ="Passwords do not match";
        return false;
    }else{
        return true;
    }
   
}

// Show Password 

function showPassword() {
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// Show Confirm Password

function showConfirmPassword() {
    var password = document.getElementById("confirmPassword");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

