import HeaderLogo from "./HeaderLogo";
import NavLink from "./NavLink";

const LINKS = ["Inicio", "Servicios", "Calendario", "Contacto"];

const Header = () => {
  return (
    <div className="navbar flex justify-between md:px-28 py-5">
      <HeaderLogo />
      <div className="flex justify-around items-center">
        {LINKS.map((link) => (
          <NavLink label={link} key={link} />
        ))}
      </div>
    </div>
  );
};

export default Header;
