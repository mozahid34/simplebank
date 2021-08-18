//authentication
document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

   

    if (email == 'mozahid34@gmail.com' && pass == '123456' ) {
        window.location.href="bank.html";
    }
    else {
        window.alert('user-name or password may be incorrect');
    }


})