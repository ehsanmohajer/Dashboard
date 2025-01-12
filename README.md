
# Dashboard Management App

## Overview
This project is a web-based task management application for communication between employers and trainees. It allows employers to define projects, and trainees can view and request to join these projects. An admin role is available to manage users, projects, and requests.

## Features
- **Admin Dashboard**:
  - View and manage users, projects, and requests.
  - Handle tasks and pinned notes.

- **Employer Dashboard**:
  - Define new projects.
  - View, edit, and delete projects.
  - Track trainee requests for projects.

- **Trainee Dashboard**:
  - View available projects.
  - Submit requests to join projects.
  - Track the number of requests sent and approved.

- **Authentication**:
  - Register as a trainee or employer.
  - Login with username and password.
  - Forgot password functionality.

- **Dynamic Data**:
  - Projects and user data stored in `localStorage` for simplicity (future plans for MongoDB integration).

## Technologies Used
- **Frontend**:
  - HTML
  - CSS (Tailwind CSS)
  - JavaScript

- **Styling Framework**:
  - Tailwind CSS (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)

- **Future Backend**:
  - MongoDB for cloud-based storage (planned).

## Project Structure
```
project-root/
├── assets/
│   ├── images/
│   │   └── userPic.jpg
├── dist/
│   └── styles.css         # Compiled Tailwind CSS
├── src/
│   └── styles.css         # Tailwind input file
├── styles/
│   └── styles.css         # Final stylesheet
├── scripts/
│   ├── script.js          # Shared JS logic
│   ├── register.js        # Registration page logic
│   ├── employer.js        # Employer dashboard logic
│   ├── trainee.js         # Trainee dashboard logic
│   └── admin.js           # Admin dashboard logic
├── admin-dashboard.html
├── employer-dashboard.html
├── trainee-dashboard.html
├── register.html
├── index.html
└── README.md              # Project documentation
```

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ehsanmohajer/trainee-task-app.git
   cd trainee-task-app
   ```

2. **Install Dependencies**:
   - Install Tailwind CSS if you haven't already:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init
     ```

3. **Build Tailwind CSS**:
   ```bash
   npx tailwindcss -i ./src/styles.css -o ./styles/styles.css --minify
   ```

4. **Open the Application**:
   - Use a live server or open `index.html` in a browser:
     ```bash
     live-server
     ```

## Usage
1. **Login**:
   - Admin:
     - Username: `admin`
     - Password: `Admin@123`
   - Trainees and Employers must register first.

2. **Admin Dashboard**:
   - Manage users, projects, requests, and tasks.

3. **Employer Dashboard**:
   - Define, edit, and delete projects.
   - Track trainee requests for projects.

4. **Trainee Dashboard**:
   - View available projects.
   - Submit requests to join projects.
   - View project statistics.

## Planned Features
- **MongoDB Integration**:
  - Store user and project data in a cloud database for multi-user accessibility.
- **Authentication Improvements**:
  - Implement secure password storage using hashing.
- **Real-Time Updates**:
  - Use WebSocket or similar technology for real-time data sync between users.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
