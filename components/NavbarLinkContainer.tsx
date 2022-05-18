import NavLink from './NavLink'

export type NavbarLinksProps = {
    links: string[]
}
const NavbarLinkContainer = ({ links }: NavbarLinksProps) => {
    return (
        <div className="flex self-center justify-evenly">
            {links.map((l) => (
                <NavLink text={l} />
            ))}
        </div>
    )
}
export default NavbarLinkContainer
