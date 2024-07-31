const Medicamento = () => {
    return (
        <section
            id="medicamento"
            className="flex w-full h-auto py-20 min-h-[500px]"
        >
            <div
                className="flex max-md:flex-wrap justify-between max-md:justify-center w-full mx-auto max-w-[1100px] px-10"
            >
                <div
                    className="w-[calc(100%-570px)] max-screen900:w-[35%] max-md:w-full max-md:max-w-[500px]"
                >
                    <img className="object-cover background-image w-full" src="/image/medicamento/capsulas.png" alt="Capsulas" />
                </div>
                <div className="w-[530px] max-screen900:w-[60%] max-md:w-full  max-md:max-w-[600px]">
                    <h2 className="text-primary-color-red font-bold text-[40px] leading-[45px] my-7"><span className="text-black">Nossos</span> Tipos de
                        Medicamentos</h2>
                    <ul>
                        <li className="my-10">
                            <h3 className="ml-7 relative max-w-[450px] my-5 before:content-[''] before:absolute before:left-[-30px] before:top-[50%] before:translate-y-[-50%] before:w-[24px] before:h-[24px] before:bg-img_list_medicamento text-black text-[18px] font-semibold">
                                Medicamentos Genéricos
                            </h3>
                            <p className="text-black opacity-50 text-[18px] leading-[28px] my-1.5">
                                Oferecemos uma ampla variedade de medicamentos genéricos que são alternativas eficazes e econômicas aos medicamentos de marca. Nossos genéricos passam por rigorosos controles de qualidade para garantir a sua segurança e eficácia.
                            </p>
                        </li>
                        <li className="my-10">
                            <h3 className="ml-7 relative max-w-[450px] my-5 before:content-[''] before:absolute before:left-[-30px] before:top-[50%] before:translate-y-[-50%] before:w-[24px] before:h-[24px] before:bg-img_list_medicamento text-black text-[18px] font-semibold">
                                Medicamentos de Marca
                            </h3>
                            <p className="text-black opacity-50 text-[18px] leading-[28px] my-1.5">
                                Contamos com um vasto estoque de medicamentos de marca, fabricados pelas principais indústrias farmacêuticas. Garantimos produtos de alta qualidade para atender todas as suas necessidades de saúde.
                            </p>
                        </li>
                        <li className="my-10">
                            <h3 className="ml-7 relative max-w-[450px] my-5 before:content-[''] before:absolute before:left-[-30px] before:top-[50%] before:translate-y-[-50%] before:w-[24px] before:h-[24px] before:bg-img_list_medicamento text-black text-[18px] font-semibold">
                                Medicamentos Controlados
                            </h3>
                            <p className="text-black opacity-50 text-[18px] leading-[28px] my-1.5">
                                Dispomos de medicamentos controlados, seguindo todas as normas e regulamentações para a sua segurança. Nossa equipe está pronta para orientá-lo sobre o uso correto e seguro desses medicamentos.                            </p>
                        </li>
                        <li className="my-10">
                            <h3 className="ml-7 relative max-w-[450px] my-5 before:content-[''] before:absolute before:left-[-30px] before:top-[50%] before:translate-y-[-50%] before:w-[24px] before:h-[24px] before:bg-img_list_medicamento text-black text-[18px] font-semibold">
                                Suplementos e Vitaminas
                            </h3>
                            <p className="text-black opacity-50 text-[18px] leading-[28px] my-1.5">
                                Nossa linha de suplementos e vitaminas é cuidadosamente selecionada para ajudar a manter e melhorar sua saúde. Disponibilizamos produtos das melhores marcas do mercado.                            </p>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}


export default Medicamento;