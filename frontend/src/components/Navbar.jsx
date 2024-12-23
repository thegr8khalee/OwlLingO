import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Bell, LogOut, Palette, UserRoundPen, UserRoundSearch } from "lucide-react";
import logo from './img/OwlLingO_logo.png'

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
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <img
                src={logo}
                alt="logo"
                className="size-9 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
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
              {/* <span className="hidden group-hover:opacity-100 group-hover:translate-x-2 group-hover:flex">Themes</span> */}
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <UserRoundPen className="size-5" />
                </Link>

                <Link
                to={"/search"}
                className={`
                btn btn-sm gap-2 transition-colors
              
                `}
                >
                <UserRoundSearch className="size-5" />
                </Link>

                <Link
                to={"/notifications"}
                className={`
                btn btn-sm gap-2 transition-colors
              
                `}
                >
                <Bell className="size-5" />
                {/* <span className="hidden sm:inline"></span> */}
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  {/* <span className="hidden sm:inline"></span> */}
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