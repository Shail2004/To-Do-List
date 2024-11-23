## To-Do List Application 📝

### Overview

This is a full-stack To-Do List application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with user authentication and authorization powered by **JWT** (JSON Web Tokens). The application allows users to securely create, manage, and update their tasks, ensuring data persistence and seamless interaction.

---

### Features ✨

- **User Authentication & Authorization**: Secure login and registration using JWT, ensuring that each user’s tasks are private and accessible only to them.
- **Task Management**: Users can add, edit, delete, and mark tasks as completed or pending.
- **Persistence**: Task data is saved in MongoDB, allowing tasks to be stored and retrieved even after a page refresh.
- **Responsive UI**: The app is built with a clean, intuitive interface using **React.js** and styled with **SCSS** for a responsive and flexible layout across devices.

---

### Installation 🛠️

#### Prerequisites

Before starting, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

#### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shail2004/To-Do-List.git
   cd todo-list-app
   ```

2. **Install dependencies for both backend and frontend**:
   - For the **backend**:
     ```bash
     cd backend
     npm install
     ```

   - For the **frontend**:
     ```bash
     cd frontend
     npm install
     ```

3. **Setup environment variables**:
   In the `backend` directory, create a `.env` file with the following configuration:
   ```env
   PORT=your-backend-port-number
   MONGO_URI=your-mongo-db-uri
   JWT_SECRET=your-jwt-secret-key
   ```

4. **Run the application**:
   To start both the backend and frontend servers in development mode:
   - **Backend**:
     ```bash
     cd backend
     npm run dev
     ```

   - **Frontend**:
     ```bash
     cd frontend
     npm run dev
     ```

   The backend server will run on `http://localhost:4000`, and the frontend will be available at `http://localhost:5173`.

---

### Technologies Used 🧰

- **Frontend**:
  - **React.js**: For building the user interface.
  - **SCSS**: For styling and creating a responsive design.
  - **JWT (JSON Web Tokens)**: For secure authentication and authorization.

- **Backend**:
  - **Node.js**: JavaScript runtime for server-side logic.
  - **Express.js**: Web framework for handling REST API requests.
  - **MongoDB**: NoSQL database for storing user tasks and authentication details.

---

### Author ✨

Created by [Shail Jain](https://github.com/Shail2004). Feel free to reach out for collaborations, feedback, or any questions.
