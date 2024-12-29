import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPAge";
import ThemePage from "./pages/ThemePage";
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import {Loader} from "lucide-react";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";
import SearchPage from "./pages/SearchPage";
import NotificationPage from "./pages/NotificationPage";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore()
  const {theme} = useThemeStore()

  console.log({onlineUsers})

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({authUser})

  if(isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
    <Loader className="size-10 animate-spin" />
  </div>
  )

  return (
    <div data-theme={theme}>
      <Navbar/>

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <LandingPage />} />
        <Route path="/home" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> :  <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> :  <Navigate to="/" />} />
        <Route path="/theme" element={<ThemePage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/search" element={authUser ? <SearchPage /> : <Navigate to="/login" />} />
        <Route path="/notifications" element={authUser ? <NotificationPage /> : <Navigate to="/login" />} />
      </Routes>

      <Toaster />

    </div>
  )
}

export default App;
