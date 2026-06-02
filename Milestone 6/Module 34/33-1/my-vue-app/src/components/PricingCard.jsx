import React from 'react';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='bg-emerald-600 rounded gap-4 mt-2'>
                <h2>{pricing.name}</h2>
                <h4>{pricing.price}</h4>
            </div>
        </div>
    );
};

export default PricingCard;