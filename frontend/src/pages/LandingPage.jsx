import { User, Globe, MessageSquare, Video, Earth, HandCoins, Languages } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../components/img/Hero.jpg"
import { useThemeStore } from "../store/useThemeStore";
import { THEMES } from "../constants";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/signup'); // Navigate to the signup page
      };
    const { theme, setTheme } = useThemeStore();
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);  // Switch language using the i18n instance
      };
  return (
    <div className="bg-base-200">
      {/* Hero Section */}
      <div className="hero bg-base-200 min-h-screen pt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <img
        src={Hero}
        className="max-w-xsm sm:max-w-md rounded-lg shadow-2xl" />
        <div>
        <h1 className="text-5xl font-bold">Unleash Your Linguistic Wings!</h1>
        <p className="py-6">
        Connect. Learn. Communicate.
        </p>
        <button className="btn btn-primary" onClick={handleGetStarted}>Get Started</button>
        </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose OwlLingo?</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <Globe className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Global Connections</h3>
              <p className="mt-2 text-sm">
                Meet native speakers from around the world and expand your horizons.
              </p>
            </div>
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <MessageSquare className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Real-Time Chat</h3>
              <p className="mt-2 text-sm">
                Chat with friends online in real-time.
              </p>
            </div>
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <Video className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Organise Video Meetings</h3>
              <p className="mt-2 text-sm">
                Schedule video meetings with learners.
              </p>
            </div>
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <User className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Personalized matching</h3>
              <p className="mt-2 text-sm">
                Meet users that will benefit you in your learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/** How to use */}
      <section className="py-16 bg-base-200">
      <h2 className="text-3xl font-bold mb-8 text-center">How To Use OwlLingO</h2>
      <ul className="steps flex justify-center items-center">
        <li className="step step-primary">SignUp</li>
        <li className="step step-primary">Add Friends</li>
        <li className="step step-primary">Chat</li>
        <li className="step step-primary">Organize Meetings</li>
      </ul>
      </section>


      {/** themes */}
      <h2 className="text-3xl font-bold mb-8 text-center pt-20 pb-0">Personalize Your Experience</h2>
      <p className="text-center pb-10">Choose from 32 themes</p>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 md:grid-rows-6 md:ml-60 md:mr-60 gap-2 pb-20">
                {THEMES.map((t) => (
                  <button
                    key={t}
                    className={`
                      group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                      ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
                    `}
                    onClick={() => setTheme(t)}
                  >
                    <div className="relative h-8 w-full rounded-md overflow-hidden" data-theme={t}>
                      <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                        <div className="rounded bg-primary"></div>
                        <div className="rounded bg-secondary"></div>
                        <div className="rounded bg-accent"></div>
                        <div className="rounded bg-neutral"></div>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium truncate w-full text-center">
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </span>
                  </button>
                ))}
              </div>

      {/** Language */}
      <h2 className="text-3xl font-bold mb-8 text-center pt-20 pb-0">Personalize To Your Preferred Language</h2>
      <div className="flex flex-col gap-1 pb-20">
        <select className="select select-bordered w-full max-w-xs ml-auto mr-auto"
              onChange={(e) => changeLanguage(e.target.value)}>
              <option disabled selected>
              <span className="mr-2">
                <Globe /> 
              </span>
              {t('language')}
              </option>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
              <option value="bn_BD">বাংলা</option>
              <option value="es">Español</option>
              <option value="hi_IN">हिन्दी</option>
              <option value="pt">Português</option>
              <option value="ru">Русский</option>
              <option value="ur">اردو</option>
              <option value="zh_CN">中文</option>
            </select>
        </div>

      {/** Benefits */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Benefits</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <Languages className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Immersive language learning</h3>
              <p className="mt-2 text-sm">
                Learn From Native Speakers.
              </p>
            </div>
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <Earth className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Bridging cultural gaps</h3>
              <p className="mt-2 text-sm">
                Learn Cultures From Natives.
              </p>
            </div>
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <HandCoins className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Free To Use</h3>
              <p className="mt-2 text-sm">
                OwlLingO is 100% Free!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="testimonial-card p-6 shadow-lg rounded-lg bg-base-100">
              <p className="text-sm italic">
                OwlLingo helped me speak Spanish fluently in just 3 months!
              </p>
              <h3 className="mt-4 font-bold">- Jane Doe</h3>
            </div>
            <div className="testimonial-card p-6 shadow-lg rounded-lg bg-base-100">
              <p className="text-sm italic">
                The best platform to meet native speakers and learn languages.
              </p>
              <h3 className="mt-4 font-bold">- John Smith</h3>
            </div>
            <div className="testimonial-card p-6 shadow-lg rounded-lg bg-base-100">
              <p className="text-sm italic">
                Interactive and immersive. Highly recommended for learners.
              </p>
              <h3 className="mt-4 font-bold">- Maria Gomez</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-base-300 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg">
            Join thousands of learners and unlock new opportunities today.
          </p>
          <Link
            to="/signup"
            className="mt-6 inline-block bg-primary btn-primary font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-secondary transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-base-300  text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} OwlLingo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
