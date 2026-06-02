import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingdata = use(pricingPromise);

    console.log(pricingdata)

    return (
        <div>
            <h2>Gadgets Details</h2>
            <div>
                {
                    pricingdata.map(pricing => <PricingCard
                        key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;