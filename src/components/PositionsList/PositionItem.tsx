import React from 'react'

interface PositionItemProps {
    title: string
    salary: string
    time: string
}

const PositionItem = (props: PositionItemProps) => {
    return (
        <div className={'p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition duration-300 ease-in-out hover:shadow-md group relative'}>
            <h3 className={'text-lg font-medium text-gray-900 mb-1'}>
                {props.title}
            </h3>
            <div className={'flex items-center text-sm text-gray-500 space-x-4'}>
                <span className={'capitalize'}>{ props.time }</span>
                <span className={'text-gray-300'}>|</span>
                <p className="font-medium text-gray-600">
                    Faixa salarial: <span className={'font-semibold text-gray-800'}>{props.salary}</span>
                </p>
            </div>
        </div>
    )
}

export default PositionItem