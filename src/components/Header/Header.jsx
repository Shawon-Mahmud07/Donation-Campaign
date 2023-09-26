import Logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
const Header = () => (
  <div className="navbar flex-col md:flex-row bg-base-100">
    <div className="flex-1 w-56 md:w-full pt-2 md:pt-0">
      <img src={Logo} />
    </div>

    <div className="flex-none rounded-md  mt-5 md:mt-0 bg-[#b8b8b8] md:bg-white p-2 md:p-0">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "underline mx-3 text-[#FF444A] text-base md:text-lg font-bold"
            : "mx-3 text-base text-[#0B0B0B] md:text-lg font-bold"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/donation"
        className={({ isActive }) =>
          isActive
            ? "underline mx-3 text-[#FF444A] text-base md:text-lg font-bold"
            : "mx-3 text-base text-[#0B0B0B] md:text-lg font-bold"
        }
      >
        Donation
      </NavLink>

      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          isActive
            ? "underline mx-3 text-[#FF444A] text-base md:text-lg font-bold"
            : "mx-3 text-base text-[#0B0B0B] md:text-lg font-bold"
        }
      >
        Statistics
      </NavLink>
    </div>
  </div>
);

export default Header;
