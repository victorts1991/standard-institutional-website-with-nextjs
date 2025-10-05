import React from 'react'
import PositionItem from './PositionItem'

const PositionsList = () => { 
    return (
        <>
            <section className={'mb-8'}>
                <h2 className={'text-2xl font-semibold text-gray-800 mb-4'}>
                    Design
                </h2>
                <div className="space-y-4">
                    <PositionItem 
                        title={'Product Designer'}
                        salary={'R$7.000'}
                        time={'Full-time'}
                    />
                    <PositionItem 
                        title={'UX Designer'}
                        salary={'R$6.000'}
                        time={'Full-time'}
                    />
                </div>
            </section>
            <section className={'mb-8'}>
                <h2 className={'text-2xl font-semibold text-gray-800 mb-4'}>
                    Desenvolvimento de Software
                </h2>
                <div className="space-y-4">
                    <PositionItem 
                        title={'Desenvolvedor(a) iOS'}
                        salary={'R$8.000'}
                        time={'Full-time'}
                    />
                    <PositionItem
                        title="Desenvolvedor(a) Front-end"
                        salary="R$7.000"
                        time="Full-time"
                    />
                    <PositionItem
                        title="Desenvolvedor(a) Back-end"
                        salary="R$8.000"
                        time="Full-time"
                    />
                    
                </div>
            </section>
        </>

    )

}

export default PositionsList