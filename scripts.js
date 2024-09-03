function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful!');
        window.location.href = 'bus-route.html'; // Redirect to the bus route page
    } else {
        alert('Invalid email or password.');
    }
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert(`Signup successful! Welcome, ${name}`);
    window.location.href = '#login'; // Redirect to the login form
}



let signUp = document.querySelector('.signUp')
let login = document.querySelector('.login')

let loginContainer = document.querySelector('.container-login')
let signupContainer = document.querySelector('.container-signup')

signUp.addEventListener('click', function(){

    console.log('signup')


    loginContainer.style.transform = "rotateY(180deg)"
    signupContainer.style.transform = "rotateY(0deg)"

    loginContainer.style.zIndex = "1"
    signupContainer.style.zIndex = "2"
})

login.addEventListener('click', function(){

    console.log('login')

    signupContainer.style.transform = "rotateY(180deg)"
    loginContainer.style.transform = "rotateY(0deg)"

    signupContainer.style.zIndex = "1"
    loginContainer.style.zIndex = "2"
})