document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;

    if (username.length < 3) {
        alert('Username must be at least 3 characters long.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some((u) => u.username === username)) {
        alert('Username already exists');
        return;
    }

    users.push({ username, password, role, avatar: 'assets/images/userPic.jpg' });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! Please log in.');
    window.location.href = 'index.html';
});
