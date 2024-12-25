import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Bell, LogOut, Palette, UserRoundPen, UserRoundSearch } from "lucide-react";
import logo from './img/OwlLingO_logo.png'
import meet from './img/meet.png'

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

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
              <Palette className="size-5" />
              <span className="hidden group-hover:flex duration-300">Themes</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2 group`}>
          
                  <UserRoundPen className="size-5" />
                  <span className="hidden group-hover:flex duration-300">Profile</span>
                </Link>

                <Link
                to={"/search"}
                className={`
                btn btn-sm gap-2 transition-colors group`}
                >
                <UserRoundSearch className="size-5" />
                <span className="hidden group-hover:flex duration-300">Search</span>
                </Link>

                <Link
                to={"/notifications"}
                className={`
                btn btn-sm gap-2 transition-colors group
              
                `}
                >
                
                <Bell className="size-5" />
                <span className="hidden group-hover:flex duration-300">Notifications</span>
                </Link>

                {/** video link */}
                <a
                href="https://meet.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm gap-2 transition-colors group"
                >
                
                <img src={meet} alt="meet" className="size-5 ml-0" />
                <span className="hidden group-hover:flex duration-300">Google Meet</span>
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