import React from 'react'
import MetricItem from './MetricItem'

const Metrics = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between gap-6 mb-32">
            <MetricItem 
                metric={'400+'}
                title={'Projetos concluídos'}
                description={'Nós ajudamos a construir mais de 400 projetos incríveis.'}
            />
            <MetricItem 
                metric={'100+'}
                title={'Colaboradores'}
                description={'Temos mais de 100 colaboradores no nosso time que se preocupam com nossos clientes.'}
            />
            <MetricItem 
                metric={'20k'}
                title={'Downloads'}
                description={'Nossos projetos que estão disponíveis em lojas já foram baixados mais de 20.000 vezes.'}
            />
            <MetricItem 
                metric={'500+'}
                title={'Reviews 5 estrelas'}
                description={'Estamos orgulhosos de contar com mais de 500 reviews 5 estrelas em nossos produtos.'}
            />
            
        </section>
    )
}

export default Metrics