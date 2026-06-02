
import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    console.log(contries)

    return (
        <div>
            In the Countries
        </div>
    );
};

export default Countries;