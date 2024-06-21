import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="navbar bg-main-color h-14 flex flex-row justify-between items-center p-4">
                <article className="w-[60%] md:w-[50%] lg:w-[40%]   flex justify-between">
                    <a href="/">
                        <img className="h-9 w-9" src="https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png" alt="logo" />
                    </a>
                    <ol className="justify-between hidden md:flex md:w-[70%] lg:w-[60%] xl:w-[50%] items-center">
                        <li><a className="font-semibold hover:underline" href="">Sobre nosotros</a></li>
                        <li><a className="font-semibold hover:underline" href="">Contacto</a></li>
                        <li><a className="font-semibold hover:underline" href="">Planes</a></li>
                    </ol>
                </article>
                <button onClick={openMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-third-color" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <button className="hidden md:flex">
                    <a className="font-semibold hover:underline hover:text-gray-800" href="">Iniciar sesión</a>
                </button>
            </nav>
            <ol className={`bg-main-color ${isOpen ? "": "hidden"} md:hidden`}>
                <li className="hover:bg-third-color p-1 border-b-2 border-second-color"><a className="font-semibold" href="">Iniciar sesión</a></li>
                <li className="hover:bg-third-color p-1"><a className="font-semibold" href="">Inicio</a></li>
                <li className="hover:bg-third-color p-1"><a className="font-semibold" href="">Sobre nosotros</a></li>
                <li className="hover:bg-third-color p-1"><a className="font-semibold" href="">Contacto</a></li>
                <li className="hover:bg-third-color p-1"><a className="font-semibold" href="">Planes</a></li>
            </ol>
        </>
    );
}

export default Navbar;