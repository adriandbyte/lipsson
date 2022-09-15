type NavLinkProps = {
  to?: string;
  label: string;
};
const NavLink = ({ label }: NavLinkProps) => {
  return (
    <span className="text-gray-300 z-20 hover:text-gray-100 font-gotham mx-1 text-xs md:text-xl md:mx-4 cursor-pointer">
      {label}
    </span>
  );
};

export default NavLink;
