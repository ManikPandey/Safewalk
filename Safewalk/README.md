# React + Vite

# Safe Walk

Safe Walk is a web application designed to provide a secure, user-friendly platform for managing users and incident logs in healthcare or safety-focused environments. The project leverages **React** for the frontend, **Express** for the backend, and **Redux** for state management, with user session persistence via local storage.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Notes & Recommendations](#notes--recommendations)
- [License](#license)

---

## Features

- **User Registration & Management:** Register and manage users.
- **Incident Logging:** Create, view, and manage incident logs.
- **Patient Details:** View detailed patient information.
- **Dashboard:** Overview of users and incidents.
- **State Management:** Global state with Redux.
- **Session Persistence:** User sessions stored in local storage.
- **Component-Based UI:** Modular React components for maintainability.

---

## Project Structure

---
-/SafeWalk
  /backend
   - server.js
-    /routes
      - users.js
      - incidents.js
-  /frontend
    - package.json
-    /src
          - App.js
     
      /components
        - Header.js
         - Dashboard.js
         - PatientDetails.js
         - IncidentLog.js
       /redux
        - store.js
         - actions.js
         - reducers.js
      - App.css
 - README.md



---
---

## Tech Stack

- **Frontend:** React, Redux, CSS
- **Backend:** Node.js, Express.js, Body-parser
- **State Management:** Redux
- **Session Storage:** Local Storage

---

## Installation

### Prerequisites

- Node.js and npm installed

### Backend Setup
cd backend
npm install
node server.js


### Frontend Setup
cd frontend
npm install
npm start


---

## Usage

- **Start the backend server** (`node server.js` in `/backend`)
- **Start the frontend** (`npm start` in `/frontend`)
- Open your browser and navigate to the frontend's local server (typically `http://localhost:3000`)
- Register users, log incidents, and view dashboards

---

## Notes & Recommendations

- **Styling:** Each component should be styled using CSS as per your design requirements.
- **Security:** For production, enhance authentication, input validation, and secure API endpoints.
- **Real-Time Features:** Consider adding WebSocket or similar for real-time incident updates.
- **Scalability:** For larger applications, consider more robust state management and backend structure.

---

## License

This project is provided as a starting point for your Safe Walk platform. Please review and enhance security and scalability features before deploying to production environments.

