document.addEventListener('DOMContentLoaded', function () {
    const adminCredentials = { username: 'admin', password: 'Admin@123' };

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Check admin login
        if (username === adminCredentials.username && password === adminCredentials.password) {
            loginUser('Admin', 'admin', 'assets/images/userPic.jpg');
            window.location.href = 'admin-dashboard.html';
            return;
        }

        // Check other users
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((u) => u.username === username && u.password === password);

        if (!user) {
            alert('Invalid username or password');
            return;
        }

        // Login based on role
        loginUser(user.username, user.role, user.avatar || 'assets/images/userPic.jpg');
        if (user.role === 'trainee') {
            window.location.href = 'trainee-dashboard.html';
        } else if (user.role === 'employer') {
            window.location.href = 'employer-dashboard.html';
        } else {
            alert('Invalid role');
        }
    });

    // Forgot Password functionality
    document.getElementById('forgot-password').addEventListener('click', function () {
        const username = prompt('Enter your username to reset your password:');
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((u) => u.username === username);

        if (!user) {
            alert('User not found');
            return;
        }

        const newPassword = prompt('Enter your new password:');
        if (newPassword.trim().length < 6) {
            alert('Password must be at least 6 characters.');
            return;
        }

        user.password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Password reset successfully! Please log in.');
    });

    // Helper function to set login details
    function loginUser(username, role, avatar) {
        localStorage.setItem('userName', username);
        localStorage.setItem('userRole', role);
        localStorage.setItem('userAvatar', avatar);
    }
});
