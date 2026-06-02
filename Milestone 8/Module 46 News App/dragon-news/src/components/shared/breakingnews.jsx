import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div>
            <button className='bg-red-400 text-amber-300'>Latest News</button>
            <Marquee pauseOnHover={true}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;