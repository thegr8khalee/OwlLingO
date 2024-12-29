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
        <h1 className="text-5xl font-bold">{t('heroTitle')}</h1>
        <p className="py-6">
        {t('heroText')}
        </p>
        <button className="btn btn-primary" onClick={handleGetStarted}>{t('getStarted1')}</button>
        </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t('whyChooseTitle')}</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <Globe className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">{t('globalConnections')}</h3>
              <p className="mt-2 text-sm">
              {t('globalConnectionsText')}
              </p>
            </div>
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <MessageSquare className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">{t('realTimeChat')}</h3>
              <p className="mt-2 text-sm">
              {t('realTimeChatText')}
              </p>
            </div>
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <Video className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">{t('organizeMeetings')}</h3>
              <p className="mt-2 text-sm">
              {t('organizeMeetingsText')}
              </p>
            </div>
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <User className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">{t('personalizedMatching')}</h3>
              <p className="mt-2 text-sm">
              {t('personalizedMatchingText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/** How to use */}
      <section className="py-16 bg-base-200">
      <h2 className="text-3xl font-bold mb-8 text-center">{t('howToUseTitle')}</h2>
      <ul className="steps flex justify-center items-center">
        <li className="step step-primary">{t('signUp')}</li>
        <li className="step step-primary">{t('addFriends')}</li>
        <li className="step step-primary">{t('chat')}</li>
        <li className="step step-primary">{t('organizeMeetingsStep')}</li>
      </ul>
      </section>


      {/** themes */}
      <h2 className="text-3xl font-bold mb-8 text-center pt-20 pb-0">{t('personalizeExperience')}</h2>
      <p className="text-center pb-10">{t('chooseFromThemes')}</p>
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
      <h2 className="text-3xl font-bold mb-8 text-center pt-20 pb-0">{t('personalize')}</h2>
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
          <h2 className="text-3xl font-bold mb-8">{t('benefitsTitle')}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <Languages className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">{t('immersiveLearning')}</h3>
              <p className="mt-2 text-sm">
              {t('immersiveLearningText')}
              </p>
            </div>
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <Earth className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">{t('bridgingGaps')}</h3>
              <p className="mt-2 text-sm">
              {t('bridgingGapsText')}
              </p>
            </div>
            <div className="feature-card p-6 shadow-lg rounded-lg bg-base-100">
              <HandCoins className="w-10 h-10 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">{t('freeToUse')}</h3>
              <p className="mt-2 text-sm">
              {t('freeToUseText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t('testimonialsTitle')}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="testimonial-card p-6 shadow-lg rounded-lg bg-base-100">
              <p className="text-sm italic">
              {t('testimonial1Text')}
              </p>
              <h3 className="mt-4 font-bold">{t('testimonial1Name')}</h3>
            </div>
            <div className="testimonial-card p-6 shadow-lg rounded-lg bg-base-100">
              <p className="text-sm italic">
              {t('testimonial2Text')}
              </p>
              <h3 className="mt-4 font-bold">{t('testimonial2Name')}</h3>
            </div>
            <div className="testimonial-card p-6 shadow-lg rounded-lg bg-base-100">
              <p className="text-sm italic">
              {t('testimonial3Text')}
              </p>
              <h3 className="mt-4 font-bold">{t('testimonial3Name')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-base-300 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-lg">
          {t('ctaText')}
          </p>
          <Link
            to="/signup"
            className="mt-6 inline-block bg-primary btn-primary font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-secondary transition duration-300"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-base-300  text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {t('footerText', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
