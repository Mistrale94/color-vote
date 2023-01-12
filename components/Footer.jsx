import React from 'react';
import Link from 'next/link';

const footer = () => {
    return (
        <div className='w-full tracking-wide fixed bottom-0 text-center py-2'>
            <Link href="/legal">Mentions Légales</Link>
        </div>
    );
};

export default footer;