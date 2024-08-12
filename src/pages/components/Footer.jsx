import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer" className="relative w-full h-auto px-[20px] pt-36 pb-10">

            <img
                className='text-center h-[80px] object-contain mx-auto my-2'
                src="/logotipo-red.png"
                alt="Logo Drogaria Central Farma"
            />
            <h2 className="text-[25px] font-Medium text-[#181818] text-center mt-5 mb-1 leading-[40px]">DROGARIA PAULISTA FARMA LTDA - 55.955.328/0001-53</h2>
            <p className="text-[18px] font-Medium text-[#181818] text-center ">© DROGARIA CENTRAL FARMA. TODOS OS DIREITOS RESERVADOS.</p>
            <Link target='_blank' to={"https://agencia.atomotecnologia.com.br"} className="font-normal text-[18px] text-[#181818] hover:opacity-75 transition-opacity leading-[35px] flex justify-center flex-wrap my-10">Desenvolvido por: <img className="w-[100px] ml-3 object-contain" src="/image/footer/atomo.webp" alt="Agencia Atomo" /></Link>
        </footer>
    )
}

export default Footer;