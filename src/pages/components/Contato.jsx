import { Link } from 'react-router-dom';

const Contato = () => {
    return (
        <section
            id="contato"
            className="flex w-full h-auto min-h-[700px] bg-primary-color-red"
        >
            <div
                className="flex max-md:flex-wrap justify-between max-md:justify-center w-full mx-auto max-w-[2000px]  max-screen900:flex-wrap "
            >
                <div
                    className="w-[50%] relative flex justify-end items-center px-20 max-screen900:w-full max-screen900:px-5 max-screen900:justify-center  max-screen900:min-h-[500px]  max-screen900:py-20"
                >
                    <img src="/image/contato/pin.webp" className="absolute top-[50%] left-0 translate-y-[-50%] opacity-90 mix-blend-luminosity blur-[4.5px]" alt="Pin" />
                    <div className='z-[1]'>
                        <h2 className='text-white text-[48px] font-semibold'>Localização</h2>
                        <p className='text-white text-[19px] font-normal mt-2 mb-5'>R. Ribeiro de Lima, 416 - Bom Retiro, São Paulo - SP, 01122-000</p>
                        <div>
                            <div className="inline-flex my-1 mr-5 items-center rounded-md bg-[#A91D01] px-5 py-1.5 text-[14px] font-semibold text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    className='mr-2'
                                >
                                    <path
                                        d="M14.572 10.5998L11.2907 9.19358C11.1506 9.13384 10.9948 9.12126 10.8468 9.15771C10.6989 9.19417 10.5668 9.2777 10.4704 9.39573L9.01729 11.1711C6.73674 10.0959 4.90143 8.26055 3.82617 5.98001L5.60156 4.52688C5.71983 4.43069 5.80353 4.29859 5.84001 4.15058C5.87648 4.00256 5.86374 3.8467 5.80371 3.70657L4.39746 0.42532C4.33158 0.274268 4.21505 0.150939 4.06797 0.0765992C3.9209 0.00225932 3.75249 -0.0184318 3.5918 0.0180937L0.544922 0.721219C0.389991 0.756996 0.251761 0.84423 0.152794 0.968685C0.0538258 1.09314 -3.56898e-05 1.24746 1.77428e-08 1.40647C1.77428e-08 8.92112 6.09082 15.0002 13.5938 15.0002C13.7528 15.0003 13.9072 14.9465 14.0317 14.8475C14.1562 14.7485 14.2435 14.6103 14.2793 14.4553L14.9824 11.4084C15.0187 11.2469 14.9976 11.0779 14.9227 10.9303C14.8478 10.7827 14.7237 10.6658 14.572 10.5998Z"
                                        fill="white"
                                    />
                                </svg>
                                (11) 3331-0007
                            </div>
                            <div className="inline-flex my-1 items-center rounded-md bg-[#A91D01] px-5 py-1.5 text-[14px] font-semibold text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    className='mr-2'

                                >
                                    <path
                                        d="M7.50293 4.1311C5.63965 4.1311 4.13672 5.63403 4.13672 7.49731C4.13672 9.3606 5.63965 10.8635 7.50293 10.8635C9.36621 10.8635 10.8691 9.3606 10.8691 7.49731C10.8691 5.63403 9.36621 4.1311 7.50293 4.1311ZM7.50293 9.68579C6.29883 9.68579 5.31445 8.70435 5.31445 7.49731C5.31445 6.29028 6.2959 5.30884 7.50293 5.30884C8.70996 5.30884 9.69141 6.29028 9.69141 7.49731C9.69141 8.70435 8.70703 9.68579 7.50293 9.68579ZM11.792 3.99341C11.792 4.42993 11.4404 4.77856 11.0068 4.77856C10.5703 4.77856 10.2217 4.427 10.2217 3.99341C10.2217 3.55981 10.5732 3.20825 11.0068 3.20825C11.4404 3.20825 11.792 3.55981 11.792 3.99341ZM14.0215 4.79028C13.9717 3.73853 13.7314 2.80688 12.9609 2.03931C12.1934 1.27173 11.2617 1.03149 10.21 0.97876C9.12598 0.917236 5.87695 0.917236 4.79297 0.97876C3.74414 1.02856 2.8125 1.2688 2.04199 2.03638C1.27148 2.80396 1.03418 3.7356 0.981445 4.78735C0.919922 5.87134 0.919922 9.12036 0.981445 10.2043C1.03125 11.2561 1.27148 12.1877 2.04199 12.9553C2.8125 13.7229 3.74121 13.9631 4.79297 14.0159C5.87695 14.0774 9.12598 14.0774 10.21 14.0159C11.2617 13.9661 12.1934 13.7258 12.9609 12.9553C13.7285 12.1877 13.9688 11.2561 14.0215 10.2043C14.083 9.12036 14.083 5.87427 14.0215 4.79028ZM12.6211 11.3674C12.3926 11.9417 11.9502 12.384 11.373 12.6155C10.5088 12.9583 8.45801 12.8792 7.50293 12.8792C6.54785 12.8792 4.49414 12.9553 3.63281 12.6155C3.05859 12.387 2.61621 11.9446 2.38477 11.3674C2.04199 10.5032 2.12109 8.45239 2.12109 7.49731C2.12109 6.54224 2.04492 4.48853 2.38477 3.6272C2.61328 3.05298 3.05566 2.6106 3.63281 2.37915C4.49707 2.03638 6.54785 2.11548 7.50293 2.11548C8.45801 2.11548 10.5117 2.03931 11.373 2.37915C11.9473 2.60767 12.3896 3.05005 12.6211 3.6272C12.9639 4.49146 12.8848 6.54224 12.8848 7.49731C12.8848 8.45239 12.9639 10.5061 12.6211 11.3674Z"
                                        fill="white"
                                    />
                                </svg>

                                centralfarma.sp
                            </div>
                        </div>
                        <p className='text-white text-[17px] font-normal mt-6'>E-mail: drogariacentralfarmabr@gmail.com</p>
                        <p className='text-white text-[17px] font-normal mt-3 mb-6'>Horário de Funcionamento: Segunda a Sábado, das 7h às 19h</p>
                        <Link
                            to={"https://maps.app.goo.gl/yW5BFbcPRCY1ht2s5"}
                            target='_BLANK'
                            className="inline-block bg-white py-4 px-10 font-bold text-[17px] text-primary-color-red rounded-full hover:bg-red-200 transition-colors duration-200 ease-linear "
                        >COMO CHEGAR ATÉ O LOCAL</Link>
                    </div>
                </div>
                <div
                    className="w-[50%] max-screen900:w-full max-screen900:min-h-[500px]"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0351393407136!2d-46.641630119846845!3d-23.531238524210675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce585ddf71c81b%3A0x6a7d2b3491eff98!2sR.%20Ribeiro%20de%20Lima%2C%20416%20-%20Bom%20Retiro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001122-000!5e0!3m2!1spt-BR!2sbr!4v1722459860981!5m2!1spt-BR!2sbr"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    />

                </div>

            </div>
        </section>
    )
}


export default Contato;