import Image from 'next/image'
import NavbarLinkContainer from './NavbarLinkContainer'

const Header = () => {
    return (
        <nav className="flex justify-between p-2">
            <div>
                <Image
                    alt="lipsson logo"
                    src="/logo.png"
                    width={80}
                    height={40}
                />
            </div>
            <NavbarLinkContainer
                links={['Inicio', 'Servicios', 'Calendario', 'Contacto']}
            />
        </nav>
    )
}
export default Header
