import { Link } from 'react-router-dom';

const Bemestar = () => {
    return (
        <section
            id="bemestar"
            className="flex w-full h-auto py-20 overflow-hidden"
        >
            <div
                className="w-full mx-auto"
            >
                <h2 className="text-black font-bold text-[40px] text-center mx-auto leading-[45px] my-7 px-10">Dicas de Saúde e Bem-Estar</h2>
                <div
                    className="relative w-full h-auto mt-[400px] max-sm:mt-20 mb-20 min-h-[1200px] mx-auto"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={1920}
                        height={994}
                        viewBox="0 0 1920 994"
                        fill="none"
                        className="min-h-[994px] mx-auto block max-xl:ml-[-200px] max-sm:hidden"
                    >
                        <path
                            d="M-1 15L1481.53 0.977402C1509.32 0.714474 1532 23.1761 1532 50.9752V453.5C1532 481.114 1509.61 503.5 1482 503.5H382C354.386 503.5 332 525.886 332 553.5V943.5C332 971.114 354.386 993.5 382 993.5H1921"
                            stroke="#C60300"
                        />
                    </svg>

                    <div className="sm:absolute flex flex-wrap justify-center gap-x-20 max-xl:gap-x-2 gap-y-14 sm:top-[-220px] sm:left-[50%] sm:translate-x-[-50%] w-full max-w-[1090px] mx-auto max-xl:px-5 max-sm:px-10">
                        <div className="relative w-[500px] max-xl:w-[calc(50%-10px)] max-sm:w-full max-sm:max-w-[500px]">
                            <img className="background-image w-[235px] h-[440px]" src="/image/bemestar/item1.png" alt="Cuide da sua imunidade" />
                            <div
                                className="absolute top-[50%] translate-y-[-50%] left-[18%] w-[400px]  max-xl:w-[calc(80%-10px)] rounded-[12px] bg-secondary-color-red text-white font-medium py-14 px-8"
                            >
                                <h3 className="text-[24px]">Cuide da sua imunidade</h3>
                                <p className="text-[16px] mt-4">Inclua alimentos ricos em vitaminas e suplemente com nossas vitaminas para fortalecer sua imunidade.</p>
                            </div>
                        </div>
                        <div className="relative w-[500px] max-xl:w-[calc(50%-10px)] max-sm:w-full max-sm:max-w-[500px]">
                            <img className="background-image w-[235px] h-[440px]" src="/image/bemestar/item2.png" alt="Cuide da sua imunidade" />
                            <div
                                className="absolute top-[50%] translate-y-[-50%] left-[18%] w-[400px] max-xl:w-[calc(80%-10px)] rounded-[12px] bg-secondary-color-red text-white font-medium py-14 px-8"
                            >
                                <h3 className="text-[24px]">Montando um Kit de Primeiros Socorros</h3>
                                <p className="text-[16px] mt-4">Monte um kit de primeiros socorros com curativos, gaze, antissépticos e analgésicos. Confira nossas sugestões de produtos.</p>
                            </div>
                        </div>

                        <div className="relative w-[500px] max-xl:w-[calc(50%-10px)] max-sm:w-full max-sm:max-w-[500px]">
                            <img className="background-image w-[235px] h-[440px]" src="/image/bemestar/item3.png" alt="Cuide da sua imunidade" />
                            <div
                                className="absolute top-[50%] translate-y-[-50%] left-[18%] w-[400px] max-xl:w-[calc(80%-10px)] rounded-[12px] bg-secondary-color-red text-white font-medium py-14 px-8"
                            >
                                <h3 className="text-[24px]">Cuidados com a Pele</h3>
                                <p className="text-[16px] mt-4">Hidrate a pele com produtos ricos em ceramidas e óleos naturais. Use protetor solar, mesmo em dias nublados.</p>
                            </div>
                        </div>

                        <div className="relative w-[500px] max-xl:w-[calc(50%-10px)] max-sm:w-full max-sm:max-w-[500px]">
                            <img className="background-image w-[235px] h-[440px]" src="/image/bemestar/item4.png" alt="Cuide da sua imunidade" />
                            <div
                                className="absolute top-[50%] translate-y-[-50%] left-[18%] w-[400px] max-xl:w-[calc(80%-10px)] rounded-[12px] bg-secondary-color-red text-white font-medium py-14 px-8"
                            >
                                <h3 className="text-[24px]">Prevenção de Doenças Sazonais</h3>
                                <p className="text-[16px] mt-4">Fortaleça seu sistema imunológico com vitamina C e zinco. Nossas vacinas e suplementos ajudam a proteger você.</p>
                            </div>
                        </div>

                        <div className="relative w-[500px] max-xl:w-[calc(50%-10px)] max-sm:w-full max-sm:max-w-[500px]">
                            <img className="background-image w-[235px] h-[440px]" src="/image/bemestar/item5.png" alt="Cuide da sua imunidade" />
                            <div
                                className="absolute top-[50%] translate-y-[-50%] left-[18%] w-[400px] max-xl:w-[calc(80%-10px)] rounded-[12px] bg-secondary-color-red text-white font-medium py-14 px-8"
                            >
                                <h3 className="text-[24px]">Importância da Hidratação</h3>
                                <p className="text-[16px] mt-4">Beba pelo menos 2 litros de água por dia. Nossos suplementos eletrolíticos ajudam a manter o equilíbrio hídrico.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='py-16'>
                    <h3 className="text-black font-bold text-[29px] text-center mx-auto leading-[35px] px-10">Ficou com dúvida?</h3>
                    <p className="max-w-[630px] font-light text-black text-[20px] leading-[24px] text-center my-7 mx-auto">Ficou com dúvida? Mande-nos uma mensagem no WhatsApp para criarmos o seu kit personalizado de saúde e bem-estar.</p>
                    <div className='flex justify-center'>
                        <Link
                            className='inline-block bg-primary-color-red hover:bg-secondary-color-red text-white font-medium text-[18px] rounded-md px-10 max-sm:px-3 py-4'
                            to={"https://wa.me/551133310007"}
                        >MONTAR PELO WHATSAPP</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Bemestar;