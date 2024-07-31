const Footer = () => {
    return (
        <footer id="footer" className="relative w-full h-auto px-[20px] pt-36 pb-10">

            <img
                className='text-center h-[80px] object-contain mx-auto my-2'
                src="/logotipo-red.png"
                alt="Logo Drogaria Central Farma"
            />
            <h2 className="text-[25px] font-Medium text-[#181818] text-center mt-5 mb-1 leading-[40px]">DROGARIA CENTRAL FARMA LTDA - 00.000.000/0000-00</h2>
            <p className="text-[18px] font-Medium text-[#181818] text-center ">© DROGARIA CENTRAL FARMA. ALL RIGHTS RESERVED.</p>
            <p className="font-normal text-[25px] text-[#181818] leading-[35px] flex justify-center flex-wrap my-10">Desenvolvido por: <img className="w-[130px] ml-3" src="/image/footer/atomo.webp" alt="Agencia Atomo" /></p>
        </footer>
    )
}

export default Footer;