import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Eye, EyeOff, Languages, Loader2, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../components/img/OwlLingO_logo.png'

import AuthImagePattern from "../components/AuthImagePattern.jsx";
import toast from "react-hot-toast";
import { useTranslation } from 'react-i18next';

const SignUpPage = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    nativeLang: "",
    langToLearn: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (!formData.nativeLang.trim()) return toast.error("Native Language Required");
    if (!formData.langToLearn.trim()) return toast.error("Language to Learn Required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col justify-center items-center pt-20 sm:pt-20 p-6 sm:p-16 min-h-screen sm:min-h-screen">

        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
            <div
                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors animate-bounce"
              >
                <img
                src={logo}
                alt="logo"
                className="size-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                />
              </div>
              <h1 className="text-2xl font-bold mt-2 animate-pulse">{t('createAccount')}</h1>
              <p className="text-base-content/60">{t('getStarted')}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">{t('fullName')}</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">{t('nativeLanguage')}</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Languages className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="Enter Your Native Language"
                  value={formData.nativeLang}
                  onChange={(e) => setFormData({ ...formData, nativeLang: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">{t('languageToLearn')}</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Languages className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text" 
                  className={`input input-bordered w-full pl-10`}
                  placeholder="Enter Language To Learn"
                  value={formData.langToLearn}
                  onChange={(e) => setFormData({ ...formData, langToLearn: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">{t('email')}</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">{t('password')}</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  {t('loading')}
                </>
              ) : (
                t('createAccountButton')
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
            {t('alreadyHaveAccount')}{" "}
              <Link to="/login" className="link link-primary">
              {t('signIn')}
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}

      <AuthImagePattern
        title={t('joinCommunity')}
        subtitle={t('connectWithFriends')}
      />
    </div>
  );
};
export default SignUpPage;
