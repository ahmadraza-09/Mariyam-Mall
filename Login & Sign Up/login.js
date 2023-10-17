const sendvalue = () => {
    var username = document.loginform.username.value;
    var password = document.loginform.password.value;


    if (username === '') {
        document.getElementById("show-alert").innerHTML = "Please enter your username";
        return false;
    }else if (username !== 'ahmadraza') {
        document.getElementById("show-alert").innerHTML = "Please enter correct username";
        return false;
    }else if (password === '') {
        document.getElementById("show-alert").innerHTML = "Please enter your password";
        return false;
    }else if (password === '1234') {
        window.location.href = '../After Login & Sign Up/index.html';
        return false;
    }else if (password !== '1234') {
        document.getElementById("show-alert").innerHTML = "Please enter correct password";
        return false;
    }else {
        return true;
    }


}