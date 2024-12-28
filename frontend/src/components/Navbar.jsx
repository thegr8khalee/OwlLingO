import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Bell, Globe, LogOut, Settings, UserRoundPen, UserRoundSearch } from "lucide-react";
import logo from './img/OwlLingO_logo.png'
import meet from './img/meet.png'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);  // Switch language using the i18n instance
  };

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="logo"
                className="size-9 rounded-xl bg-primary/9 group-hover:bg-primary/20 transition-colors"
                />
              </div>
              <h1 className="text-lg font-bold animate-pulse">OwlLingO</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/theme"}
              className={`
              btn btn-sm gap-2 transition-colors relative group
              
              `}
            >
              <Settings className="size-5" />
              <span className="hidden group-hover:flex duration-300">{t('sett')}</span>
            </Link>

            {!authUser && (
              <select className="select select-bordered w-full max-w-xs"
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
            )}

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2 group`}>
          
                  <UserRoundPen className="size-5" />
                  <span className="hidden group-hover:flex duration-300">{t('profile')}</span>
                </Link>

                <Link
                to={"/search"}
                className={`
                btn btn-sm gap-2 transition-colors group`}
                >
                <UserRoundSearch className="size-5" />
                <span className="hidden group-hover:flex duration-300">{t('search')}</span>
                </Link>

                <Link
                to={"/notifications"}
                className={`
                btn btn-sm gap-2 transition-colors group
              
                `}
                >
                
                <Bell className="size-5" />
                <span className="hidden group-hover:flex duration-300">{t('notifications')}</span>
                </Link>

                {/** video link */}
                <a
                href="https://meet.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm gap-2 transition-colors group"
                >
                
                <img src={meet} alt="meet" className="size-5 ml-0" />
                <span className="hidden group-hover:flex duration-300">{t('googleMeet')}</span>
                </a>


                <button className="flex gap-2 items-center group" onClick={logout}>
                  <LogOut className="size-5" />
                  {/* <span className="hidden group-hover:flex duration-300">Log Out</span> */}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;