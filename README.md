

# OwlLingO

## Overview

This project showcases the capabilities and expertise of a Full-Stack Software Engineer, covering both front-end and back-end development with a focus on scalable architecture, real-time communication, secure authentication, and robust UI/UX design. The platform connects users, leverages modern technologies, and implements best practices for both development and deployment.

## Key Features

- **Real-Time Communication:** Utilizes WebRTC and Socket.io for peer-to-peer chat and video calls.
- **Secure Authentication:** Implements JWT and session-based authentication for secure user login and registration.
- **State Management:** Employs Zustand for seamless state management on the front-end.
- **Responsive Design:** Tailored user interface using TailwindCSS and DaisyUI for flexible, mobile-first design.
- **Cloud Storage:** Integration with Cloudinary for image and file uploading.
- **Testing & Validation:** Postman for API testing and validation of endpoints.

## Technologies & Tools

### Backend
- **Node.js** with **Express** for building the API and server-side logic
- **MongoDB** for data storage and **Mongoose** for ODM
- **Socket.io** for bi-directional communication between client and server
- **JWT (JSON Web Tokens)** for secure token-based authentication
- **Bcrypt** for hashing passwords and enhancing security
- **Cookie-parser** for cookie management
- **Cloudinary** for cloud file storage and image uploads

### Frontend
- **React.js** for building dynamic, interactive user interfaces
- **Vite** for fast development builds and improved performance
- **Zustand** for lightweight state management in React applications
- **TailwindCSS** for utility-first responsive design
- **DaisyUI** for pre-styled UI components that speed up development

### Development
- **Git** for version control

## Installation

### Clone the Repository
```bash
git clone https://github.com/thegr8khalee/OwlLingO.git
cd project-name
```

### Install Dependencies
```bash
# For backend
cd backend
npm install

# For frontend
cd frontend
npm install
```

### Configuration

- Create `.env` files in both the backend and frontend folders, specifying necessary environment variables (such as API keys, database URLs, etc.).
- Use the provided example `.env.example` files for reference.

### Run the Application Locally

- **Backend:**
```bash
cd backend
npm run dev
```

- **Frontend:**
```bash
cd frontend
npm run dev
```

## Challenges Overcome

- **Real-time communication**: Implementing WebRTC for seamless peer-to-peer interactions.
- **Scalable state management**: Using Zustand to manage state without the overhead of Redux.
- **Authentication & security**: Ensuring secure authentication and authorization using JWT.

## Future Improvements

- Implement additional features like voice translation.
- Optimize the UI/UX for accessibility and better user engagement.
- Implement automated testing with Jest and CI/CD pipeline for smoother deployments.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
