document.addEventListener('DOMContentLoaded', function () {
    const projectTableBody = document.querySelector('tbody');
    const logoutBtn = document.getElementById('logout');
    const projectsStat = document.querySelector('.grid .text-2xl'); // First statistic (Projects)
    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    // Load projects into the trainee's table
    function loadProjects() {
        projectTableBody.innerHTML = '';
        projects.forEach(project => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-4 py-2">${project.title}</td>
                <td class="px-4 py-2">${project.category}</td>
                <td class="px-4 py-2">${project.budget} EUR</td>
                <td class="px-4 py-2">${project.deadline}</td>
                <td class="px-4 py-2">
                    <button class="text-blue-500">Request</button>
                </td>
            `;
            projectTableBody.appendChild(row);
        });

        // Update project count in statistics
        projectsStat.textContent = projects.length;
    }

    loadProjects(); // Initial load

    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('userName');
            localStorage.removeItem('userRole');
            window.location.href = 'index.html'; // Redirect to the login page
        });
    }
});
