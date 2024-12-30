

# OwlLingO: Unleash Your Linguistic Wings

## Overview

OwlLingo is a global social platform designed to connect individuals seeking to learn new languages with native speakers willing to share their expertise. During signup, users specify their native language and the language they wish to learn. Based on these preferences, the platform matches learners with native speakers who volunteer to engage in conversations through chat or video calls. By fostering direct interaction with native speakers, OwlLingo emphasizes immersive, real-world communication as the most effective method for mastering a new language, bridging cultures, and building meaningful global connections.

## Key Features

- **Real-Time Communication:** Utilizes Socket.io for peer-to-peer chat.
- **Secure Authentication:** Implements JWT and session-based authentication for secure user login and registration.
- **State Management:** Employs Zustand for seamless state management on the front-end.
- **Responsive Design:** Tailored user interface using TailwindCSS and DaisyUI for flexible, mobile-first design.
- **Cloud Storage:** Integration with Cloudinary for image and file uploading.
- **Testing & Validation:** Postman for API testing and validation of endpoints.
- **i18n:** OwlLingO is translated to 10 languages.
- **Personalization:** OwlLingO has 32 themes users can choose from.
- **Personalized Matching:** Friend suggestions.



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

### Architecture Overview
The OwlLingO project follows a modular architecture with clear separation of concerns:

**Frontend:**

Hosted with Vite for fast development.
State managed using Zustand.
UI styled with TailwindCSS and DaisyUI.

**Backend:**

RESTful API built with Express.
Handles authentication, user matching, and video call setup.
Real-Time Communication:

Socket.io enable real-time chat.

**Database:**

MongoDB stores user data, language preferences, and message details.

### Development
- **Git** for version control

## Setup Instructions

### Clone the Repository
```bash
git clone https://github.com/thegr8khalee/OwlLingO.git
cd project-name
```

### Install Dependencies

**Prerequisites**
Ensure the following are installed on your system:

Node.js (version 18+)
MongoDB
Git

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

### Usage Guidelines

**Sign Up:** Create an account and specify your native and target languages.
**Get Matched:** View suggested partners who match your language preferences or search for users and send a friend request.
**Communicate:**
Chat via the messaging interface.
Start a video call using the google meet button.
**Log Out:** Safely log out of your account when done


## Future Improvements

- Implement additional features like voice translation.
- Optimize the UI/UX for accessibility and better user engagement.

## License

This project is licensed under the Propriety License - see the [LICENSE](LICENSE.txt) file for details.
