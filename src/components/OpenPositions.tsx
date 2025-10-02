import React from 'react'
import Image from 'next/image'

const OpenPositions = () => {
    return (
        <section className="text-center pt-16 pb-24 max-w-screen-xl mx-auto px-4"> {/* Adicionei max-w e mx-auto para centralizar o conteúdo */}
            <p className="inline-block bg-gray-200 rounded-md text-red-700 font-semibold mb-3 p-2.5">
                Vagas abertas!
            </p>

            <h1 className='text-5xl font-extrabold text-gray-900 mb-6'>
                Estamos procurando por talentos
            </h1>

            <p className='text-xl text-gray-500 max-w-4xl mx-auto mb-12'> {/* Adicionei mb-12 para espaçamento antes da imagem */}
                Somos uma equipe 100% remota com pessoas do Brasil inteiro.
            </p>

            {/* CORREÇÃO: Adicione um container com 'relative' e uma altura fixa  */}
            <div className="relative w-full h-96 mx-auto"> 
                <Image 
                    src="/talentos.png"
                    alt="Talentos"
                    className='cursor-pointer'
                    fill // A imagem irá preencher este novo container 👆
                    style={{ objectFit: 'cover', borderRadius: '8px' }} // Ajusta como a imagem preenche e adiciona borda
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                />
            </div>
            
        </section>
    )
}

export default OpenPositions