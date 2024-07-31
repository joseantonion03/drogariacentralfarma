import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import './css/Drawer.css'; // Crie um arquivo CSS para estilizar o menu

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [{ x }, set] = useSpring(() => ({
        x: -300 // Largura do menu
    }));

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')

        }
    }, [isOpen])

    const openMenu = () => {
        setIsOpen(true);
        set({ x: 0 });
    };

    const closeMenu = () => {
        setIsOpen(false);
        set({ x: -300 });
    };

    const bind = useDrag(({ down, movement: [mx] }) => {
        if (down) {
            set({ x: mx });
        } else {
            if (mx > -150) {
                openMenu();
            } else {
                closeMenu();
            }
        }
    });

    //ESCREVA O DIRETORIO DE CADA PÁGINA NESSE OBJETO
    const dirPage = {
        servico: "#",
        produto: "#",
        bemestar: "#",
        contato: "#"
    }

    return (
        <header className="w-full h-[100px] flex items-center justify-center bg-primary-color-red select-none">
            <div
                className="w-full flex justify-between items-center max-w-[1200px] px-4"
            >
                <div><img className="h-[80px] object-contain" src="/logotipo.png" alt="Logotipo da Drogaria Central Farma" /></div>
                <button
                    className='nav:hidden'
                    onClick={openMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-12 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
                <nav className='max-nav:hidden'>
                    <ul className="flex gap-6">
                        <li><Link className="font-Regular text-[17px] text-white hover:text-red-200" to={dirPage.servico}>Serviços</Link></li>
                        <li><Link className="font-Regular text-[17px] text-white hover:text-red-200" to={dirPage.produto}>Produtos</Link></li>
                        <li><Link className="font-Regular text-[17px] text-white hover:text-red-200" to={dirPage.bemestar}>Bem-Estar</Link></li>
                        <li><Link className="font-Regular text-[17px] text-white hover:text-red-200" to={dirPage.contato}>Contato</Link></li>
                    </ul>
                </nav>
                <div className='max-nav:hidden'>
                    <Link
                        to={dirPage.whatsapp}
                        className="bg-white py-4 px-10 font-medium text-[17px] text-primary-color-red rounded-full hover:bg-red-200 transition-colors duration-200 ease-linear "
                    >Entrar em contato</Link>
                </div>
            </div>

            <div className="nav:hidden">
                <animated.div
                    className="fixed top-0 z-[999] left-0 px-[20px] w-full h-full max-w-[300px] bg-[#f5f5f5]"
                    {...bind()}
                    style={{ transform: x.to(x => `translateX(${x}px)`) }}
                >
                    <div className="flex flex-col">
                        <div className='w-full h-[100px] border-b-[0.8px] border-solid border-[#efefef] flex items-center justify-between'>
                            <div><img className="h-[80px] object-contain" src="/logotipo-red.png" alt="Logotipo da Drogaria Central Farma" /></div>
                            <button
                                onClick={closeMenu}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-12"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </button>

                        </div>
                        <ul className='flex flex-col py-4'>
                            <li className="py-2 text-[#0B2B54] text-[20px] font-Regular"><Link to={dirPage.servico}>Serviços</Link></li>
                            <li className="py-2 text-[#0B2B54] text-[20px] font-Regular"><Link to={dirPage.produto}>Produtos</Link></li>
                            <li className="py-2 text-[#0B2B54] text-[20px] font-Regular"><Link to={dirPage.bemestar}>Bem-Estar</Link></li>
                            <li className="py-2 text-[#0B2B54] text-[20px] font-Regular"><Link to={dirPage.contato}>Contato</Link></li>
                        </ul>
                        <Link to={dirPage.whatsapp} className="select-none inline-block my-5 rounded-[5px] bg-primary-color-red hover:bg-secondary-color-red text-[#ffffff] font-Medium text-[20px] text-center w-full py-3">Entrar em contato</Link>
                    </div>
                </animated.div>
                {isOpen && <div className="overflay fixed top-0 left-0 w-full h-full bg-[#00000080] backdrop-blur-sm z-[998]" onClick={closeMenu}></div>}

            </div>
        </header>
    );
}

export default Header;