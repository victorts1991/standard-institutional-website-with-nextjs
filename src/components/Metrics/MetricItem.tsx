import React from 'react'

interface MetricItemProps {
    metric: string;
    title: string;
    description: string;    
}

const MetricItem = (props: MetricItemProps) => {
    return (
        <div className="flex-1">
            <p className="text-5xl text-red-700 font-semibold mb-3">
                {props.metric}
            </p>

            <h1 className='font-extrabold text-gray-900 mb-6'>
                {props.title}
            </h1>

            <p className='text-xl text-gray-500 max-w-4xl mx-auto'>
                {props.description}
            </p>
        </div>
    )
}

export default MetricItem