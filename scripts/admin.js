document.addEventListener('DOMContentLoaded', function () {
    const userName = localStorage.getItem('userName');
    const userAvatar = localStorage.getItem('userAvatar') || 'assets/images/userPic.jpg';

    // Set welcome message and profile picture
    document.getElementById('welcome-message').textContent = `Welcome ${userName || 'Admin'}`;
    document.getElementById('profile-pic').src = userAvatar;

    // Logout functionality
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('userName');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userAvatar');
            window.location.href = 'index.html'; // Redirect to login page
        });
    }
});
