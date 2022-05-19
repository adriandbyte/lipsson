export type NavLinkProps = {
    text: string
}
const NavLink = ({ text }: NavLinkProps) => {
    return (
        <span className="font-gotham text-xs p-1 text-[#fff] hover:text-gray-400">
            {text}
        </span>
    )
}
export default NavLink
