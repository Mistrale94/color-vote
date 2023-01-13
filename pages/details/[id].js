import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ThemeDetail = ({ theme }) => {
    const handleDelete = async (id) => {
        await prisma.theme.delete({
            where: { id },
        });
    }

    return (
        <div>
            <h1>{theme.name}</h1>
            <p>Attendees: {theme.attendees}</p>
            <p>Pincode: {theme.pincode}</p>
            <button onClick={() => handleDelete(theme.id)}>Delete Theme</button>
        </div>
    );
};

export default ThemeDetail;

export async function getStaticPaths() {
    const themes = await prisma.theme.findMany({
        select: { id: true, name: true }
    });
    return {
        paths: themes.map(theme => `/details/${theme.id}`),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const theme = await prisma.theme.findUnique({
        where: { id: params.id },
        select: { id: true, name: true, attendees: true, pincode: true, user_id: true }
    });
    return {
        props: {
            theme
        }
    }
}
