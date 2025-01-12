document.addEventListener('DOMContentLoaded', function () {
    const defineProjectBtn = document.getElementById('define-project-btn');
    const defineProjectForm = document.getElementById('define-project-form');
    const cancelProjectBtn = document.getElementById('cancel-project-btn');
    const projectTable = document.getElementById('projects-table');
    const projectTableBody = document.querySelector('tbody');
    const logoutBtn = document.getElementById('logout');

    let currentEditingRow = null; // Track the row being edited
    let projects = JSON.parse(localStorage.getItem('projects')) || []; // Load projects from localStorage

    // Update trainee dashboard project count
    function updateTraineeDashboardCount() {
        localStorage.setItem('availableProjects', projects.length);
    }

    // Load existing projects into the table
    function loadProjects() {
        projectTableBody.innerHTML = '';
        projects.forEach((project, index) => {
            const row = document.createElement('tr');
            row.innerHTML = generateTableRow(project, index);
            projectTableBody.appendChild(row);
        });
    }

    // Initial load of projects
    loadProjects();
    updateTraineeDashboardCount();

    // Show the form and hide the table when Define Project button is clicked
    defineProjectBtn.addEventListener('click', function () {
        defineProjectForm.classList.remove('hidden');
        projectTable.classList.add('hidden');
        defineProjectBtn.classList.add('hidden');
    });

    // Hide the form and show the table when Cancel button is clicked
    cancelProjectBtn.addEventListener('click', function () {
        resetForm();
    });

    // Handle form submission
    defineProjectForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const project = {
            title: document.getElementById('project-title').value,
            category: document.getElementById('project-category').value,
            budget: document.getElementById('project-budget').value,
            deadline: document.getElementById('project-deadline').value,
            situation: document.getElementById('project-situation').value,
        };

        if (currentEditingRow !== null) {
            // Update the existing project
            projects[currentEditingRow] = project;
            currentEditingRow = null;
        } else {
            // Add a new project
            projects.push(project);
        }

        localStorage.setItem('projects', JSON.stringify(projects)); // Save to localStorage
        loadProjects();
        updateTraineeDashboardCount();
        resetForm();
    });

    // Generate table row HTML
    function generateTableRow(project, index) {
        return `
            <td class="px-4 py-2">${project.title}</td>
            <td class="px-4 py-2">${project.category}</td>
            <td class="px-4 py-2">${project.budget} EUR</td>
            <td class="px-4 py-2">${project.deadline}</td>
            <td class="px-4 py-2">None</td>
            <td class="px-4 py-2">
                <label class="switch">
                    <input type="checkbox" ${project.situation === 'Open' ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </td>
            <td class="px-4 py-2">
                <button class="text-blue-500 edit-btn" data-index="${index}">Edit</button>
                <button class="text-red-500 delete-btn" data-index="${index}">Delete</button>
            </td>
            <td class="px-4 py-2">
                <button class="text-blue-500">View Requests</button>
            </td>
        `;
    }

    // Handle edit and delete actions
    projectTableBody.addEventListener('click', function (event) {
        const target = event.target;
        const index = target.dataset.index;

        if (target.classList.contains('edit-btn')) {
            const project = projects[index];
            document.getElementById('project-title').value = project.title;
            document.getElementById('project-category').value = project.category;
            document.getElementById('project-budget').value = project.budget;
            document.getElementById('project-deadline').value = project.deadline;
            document.getElementById('project-situation').value = project.situation;

            defineProjectForm.classList.remove('hidden');
            projectTable.classList.add('hidden');
            defineProjectBtn.classList.add('hidden');
            currentEditingRow = index;
        } else if (target.classList.contains('delete-btn')) {
            if (confirm('Are you sure you want to delete this project?')) {
                projects.splice(index, 1);
                localStorage.setItem('projects', JSON.stringify(projects));
                loadProjects();
                updateTraineeDashboardCount();
            }
        }
    });

    // Reset form and show table
    function resetForm() {
        defineProjectForm.reset();
        defineProjectForm.classList.add('hidden');
        projectTable.classList.remove('hidden');
        defineProjectBtn.classList.remove('hidden');
        currentEditingRow = null;
    }

    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('userName');
            localStorage.removeItem('userRole');
            window.location.href = 'index.html';
        });
    }
});
