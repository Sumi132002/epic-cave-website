// Registration form validation
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const contact = document.getElementById('contact').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const gender = document.getElementById('gender').value;

    // Validation: Check if all fields are filled
    if (!fullname || !contact || !dob || !email || !password || !confirmPassword || !gender) {
        alert('Please fill in all fields.');
        return;
    }

    // Email validation (basic)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Password length check
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    alert('Registration Successful!');
    window.location.href = "login.html"; // Redirect to login after successful registration
});

// Login form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validation: Check if both fields are filled
    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    alert('Login Successful!');
    window.location.href = "home.html"; // Redirect to home page after successful login
});
