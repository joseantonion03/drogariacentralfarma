const Hero = () => {
    return (
        <section
            id="hero"
            className="flex items-center justify-center w-full h-auto min-h-[860px] max-md:min-h-[600px] bg-img_bg_hero max-md:bg-img_bg_hero_mobile bg-cover 2xl:bg-contain max-sm:bg-contain bg-no-repeat bg-top bg-center"
        >
            <div 
            className="w-full max-w-[1100px] px-5"
            >
                <div className="w-full max-w-[430px] max-md:max-w-[550px] mt-[-100px] max-md:text-center max-md:mx-auto max-md:mt-[60vw]">
                    <h1 className="text-primary-color-red font-bold text-[40px] leading-[45px]">Drogaria Central Farma: <span className="text-black">Sua Saúde em Primeiro Lugar</span></h1>
                    <p className="font-Regular text-[20px] leading-[25px] py-7">Com sede em São Paulo, a Drogaria Central Farma oferece uma ampla gama de serviços farmacêuticos e produtos de saúde, sempre priorizando o bem-estar e a satisfação de nossos clientes.</p>
                    <a href="#servicos" className="select-none inline-block rounded-[5px] bg-primary-color-red hover:bg-secondary-color-red text-[#ffffff] font-Medium text-[20px] text-center px-10 py-3 max-sm:px-5">EXPLORE NOSSOS SERVIÇOS</a>
                </div>
            </div>
        </section>
    )
}


export default Hero;