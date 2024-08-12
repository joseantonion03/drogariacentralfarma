import { Link } from 'react-router-dom';

const Servicos = () => {
    return (
        <section id="servicos" className="w-full py-20 ">
            <div
                className="flex min-h-[900px] max-lg:flex-wrap items-center justify-between max-lg:justify-center max-w-[1200px] mx-auto px-10 max-lg:px-5"
            >
                <div className="relative  w-[calc(100%-540px)] select-none max-lg:w-full max-lg:max-w-[700px] max-lg:hidden">
                    <svg
                        width={289}
                        height={289}
                        viewBox="0 0 289 289"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute z-[-1] top-[-100px] left-[-100px]"
                    >
                        <path
                            d="M289 144.5C289 224.305 224.305 289 144.5 289C64.6949 289 0 224.305 0 144.5C0 64.6949 64.6949 0 144.5 0C224.305 0 289 64.6949 289 144.5ZM11.3502 144.5C11.3502 218.037 70.9634 277.65 144.5 277.65C218.037 277.65 277.65 218.037 277.65 144.5C277.65 70.9634 218.037 11.3502 144.5 11.3502C70.9634 11.3502 11.3502 70.9634 11.3502 144.5Z"
                            fill="#C60300"
                        />
                        <path
                            d="M250 144.5C250 202.766 202.766 250 144.5 250C86.234 250 39 202.766 39 144.5C39 86.234 86.234 39 144.5 39C202.766 39 250 86.234 250 144.5ZM50.9622 144.5C50.9622 196.16 92.8405 238.038 144.5 238.038C196.16 238.038 238.038 196.16 238.038 144.5C238.038 92.8405 196.16 50.9622 144.5 50.9622C92.8405 50.9622 50.9622 92.8405 50.9622 144.5Z"
                            fill="#C60300"
                        />
                    </svg>
                    <div className="w-full h-full max-h-[680px] max-lg:max-h-[800px] rounded-[26px] overflow-hidden">
                        <img className='w-full' src="/image/servico/servico.webp" alt="Serviços" />
                    </div>
                </div>
                <div className="w-[500px] max-lg:w-full max-lg:max-w-[700px] max-md:max-w-[500px] max-lg:mt-[50px]">

                    <span className="inline-flex items-center rounded-md bg-[#c6030033] px-3 py-1.5 text-[14px] font-semibold text-primary-color-red">
                        Serviços
                    </span>
                    <h2 className="text-primary-color-red font-bold text-[40px] leading-[45px] my-7"><span className="text-black">Serviços que a</span> Drogaria Central Farma <span className="text-black">oferece</span></h2>
                    <ul className="ml-[30px] mb-8 text-black opacity-70 text-[25px] leading-[24px] font-normal">
                        <li className="relative max-w-[450px] my-5 before:content-[''] before:absolute before:left-[-35px] before:top-[50%] before:translate-y-[-50%] before:w-[24px] before:h-[24px] before:bg-img_list_servico"><span className="font-medium">Atendimento ao Cliente:</span> Receba atendimento personalizado e tire todas as suas dúvidas.</li>
                        <li className="relative max-w-[450px] my-5 before:content-[''] before:absolute before:left-[-35px] before:top-[50%] before:translate-y-[-50%] before:w-[24px] before:h-[24px] before:bg-img_list_servico"><span className="font-medium">Consultas Farmacêuticas:</span> Agende uma consulta com nossos especialistas.</li>
                        <li className="relative max-w-[450px] my-5 before:content-[''] before:absolute before:left-[-35px] before:top-[50%] before:translate-y-[-50%] before:w-[24px] before:h-[24px] before:bg-img_list_servico"><span className="font-medium">Vacinas:</span> Proteja-se e proteja sua família. Confira as vacinas disponíveis.</li>
                        <li className="relative max-w-[450px] my-5 before:content-[''] before:absolute before:left-[-35px] before:top-[50%] before:translate-y-[-50%] before:w-[24px] before:h-[24px] before:bg-img_list_servico"><span className="font-medium">Entrega de Medicamentos:</span> Receba seus medicamentos no conforto da sua casa.</li>
                    </ul>
                    <Link to={"https://wa.me/551133310007"} className="select-none inline-block rounded-[5px] bg-primary-color-red hover:bg-secondary-color-red text-[#ffffff] font-bold text-[20px] text-center px-10 py-3 max-sm:px-5 max-sm:py-5 max-sm:text-[18px]">VERIFIQUE COM O NOSSO TIME</Link>

                </div>
            </div>
        </section>
    );
}

export default Servicos;