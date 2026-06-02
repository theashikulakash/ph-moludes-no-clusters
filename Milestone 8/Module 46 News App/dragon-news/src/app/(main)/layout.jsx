import React from 'react';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import BreakingNews from '@/components/shared/breakingnews';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;