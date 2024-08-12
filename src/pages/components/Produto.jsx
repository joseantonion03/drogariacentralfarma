import { Link } from 'react-router-dom';

const Produto = () => {
    return (
        <section
            id="produto"
            className="flex w-full h-auto py-36 max-md:pt-0 min-h-[860px] lg:bg-img_bg_produto bg-contain bg-no-repeat bg-center"
        >
            <div
                className="w-full mx-auto max-w-[1100px] px-5"
            >
                <h2 className="text-black font-bold text-[40px] text-center leading-[45px] my-7">Nossos Produtos</h2>

                <div className='w-full flex gap-4 my-20 max-lg:mb-3 max-lg:flex-wrap mx-auto max-lg:w-full max-lg:max-w-[820px] max-sm:justify-center'>
                    <div className='bg-white max-w-[400px] w-[calc(100%/3)] max-lg:w-[calc(50%-10px)] max-sm:w-full rounded-md overflow-hidden my-10'>
                        <div className='w-full h-[245px] overflow-hidden'>
                            <img className='w-full h-full object-cover object-center' src="/image/produto/item1.webp" alt="Benegrip" />
                        </div>
                        <div className='border border-solid border-[#F2F6FA] py-10 px-5'>
                            <h3 className='font-bold text-[24px] text-[#2E363E]'>Benegrip</h3>
                            <p className='text-[#2E363E] font-normal text-[16px] my-3'>Alívio rápido dos sintomas da gripe e resfriado, combatendo febre, dor e congestão nasal. </p>
                            <p className='text-[#43B02A] font-medium text-[18px] my-5'>Consultar preço</p>
                            <Link
                                className='block bg-primary-color-red hover:bg-secondary-color-red text-white font-medium text-[18px] rounded-md px-10 max-sm:px-3 py-5'
                                to={"https://wa.me/551133310007"}
                            >COMPRAR</Link>
                        </div>
                    </div>
                    <div className='bg-white max-w-[400px] w-[calc(100%/3)] max-lg:w-[calc(50%-10px)] max-sm:w-full rounded-md overflow-hidden my-10'>
                        <div className='w-full h-[245px] overflow-hidden'>
                            <img className='w-full h-full object-cover object-center' src="/image/produto/item2.webp" alt="Fralda Pampers" />
                        </div>
                        <div className='border border-solid border-[#F2F6FA] py-10 px-5'>
                            <h3 className='font-bold text-[24px] text-[#2E363E]'>Fralda Pampers</h3>
                            <p className='text-[#2E363E] font-normal text-[16px] my-3'>Conforto e proteção para o bebê, com ajuste perfeito e até 12 horas de absorção. </p>
                            <p className='text-[#43B02A] font-medium text-[18px] my-5'>Consultar preço</p>
                            <Link
                                className='block bg-primary-color-red hover:bg-secondary-color-red text-white font-medium text-[18px] rounded-md px-10 max-sm:px-3 py-5'
                                to={"https://wa.me/551133310007"}
                            >COMPRAR</Link>
                        </div>
                    </div>
                    <div className='bg-white max-w-[400px] w-[calc(100%/3)] max-lg:w-[calc(50%-10px)] max-sm:w-full rounded-md overflow-hidden my-10'>
                        <div className='w-full h-[245px] overflow-hidden'>
                            <img className='w-full h-full object-cover object-center' src="/image/produto/item3.webp" alt="Centrum Essencial" />
                        </div>
                        <div className='border border-solid border-[#F2F6FA] py-10 px-5'>
                            <h3 className='font-bold text-[24px] text-[#2E363E]'>Centrum Essencial</h3>
                            <p className='text-[#2E363E] font-normal text-[16px] my-3'>Multivitamínico completo para suprir as necessidades diárias de vitaminas e minerais. </p>
                            <p className='text-[#43B02A] font-medium text-[18px] my-5'>Consultar preço</p>
                            <Link
                                className='block bg-primary-color-red hover:bg-secondary-color-red text-white font-medium text-[18px] rounded-md px-10 max-sm:px-3 py-5'
                                to={"https://wa.me/551133310007"}
                            >COMPRAR</Link>
                        </div>
                    </div>
                </div>

                <div
                    style={{ background: 'rgba(198, 3, 0, 0.10)' }}
                    className='w-full h-auto max-w-[980px] mx-auto rounded-lg p-10'
                >
                    <p className='text-[25px] max-sm:text-[5vw] font-normal text-primary-color-red text-center max-w-[750px] mx-auto'>Não encontrou o que procurava? Sem problemas! Você pode comprar qualquer outro medicamento diretamente pelo WhatsApp. Basta clicar no link abaixo e consultar nossa equipe.</p>
                </div>
                <div className='flex justify-center my-14'>
                    <Link
                        className='inline-block bg-primary-color-red hover:bg-secondary-color-red text-white font-medium text-[18px] rounded-md px-10 max-sm:px-3 py-5'
                        to={"https://wa.me/551133310007"}
                    >CONSULTAR PELO WHATSAPP</Link>
                </div>
            </div>
        </section>
    )
}


export default Produto;