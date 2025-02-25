$(document).ready(function () {
    // Toggle password visibility
    $('#togglePassword').click(function () {
        const passwordInput = $('#password');
        const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
        passwordInput.attr('type', type);
        $(this).find('i').toggleClass('fa-eye-slash fa-eye');
    });

    $('#loginForm').submit(function (e) {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password');
        const rememberMe = $('#rememberMe').is(':checked');

        // Mock validation (replace with actual backend authentication)
        if (username === 'admin' && password.val() === 'admin123') {
            alert('Login successful! Redirecting to Admin Portal...');
            // Redirect to admin portal (replace with your actual admin page URL)
            window.location.href = 'admin.html';
        } else {
            alert('Invalid username or password. Please try again.');
            password.val(''); // Clear password field on failure
        }

        // Mock "Remember Me" functionality (store in localStorage for demo)
        if (rememberMe) {
            localStorage.setItem('rememberedAdmin', username);
        } else {
            localStorage.removeItem('rememberedAdmin');
        }
    });

    // Pre-fill username if "Remember Me" was checked previously
    const rememberedAdmin = localStorage.getItem('rememberedAdmin');
    if (rememberedAdmin) {
        $('#username').val(rememberedAdmin);
        $('#rememberMe').prop('checked', true);
    }

    // Forgot Password link (mock behavior)
    $('#forgotPassword').click(function (e) {
        e.preventDefault();
        alert('Please contact support at support@kanaakshoes.com to reset your password.');
    });
});