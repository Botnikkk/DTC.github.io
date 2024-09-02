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
