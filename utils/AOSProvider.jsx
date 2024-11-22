'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AOSProvider = ({ children }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return <>{children}</>;
};

export default AOSProvider;