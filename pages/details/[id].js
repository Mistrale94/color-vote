import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Chartpie from '../../components/Chartpie';
import Chartbar from '../../components/Chartbar';
import Tab from '../../components/Tab';

const prisma = new PrismaClient();

const ThemeDetail = ({ theme }) => {

    return (
        <div className='flex justify-center px-8'>
            <div className='text-center w-full sm:w-1/2 lg:w-1/3 px-8'>
                <h1 className='font-bold text-3xl mb-12'>{theme.name}</h1>
                <p className='p-3 font-bold'>Attendees: {theme.attendees}</p>
                <p className='p-3 font-bold'>Pincode: {theme.pincode}</p>
                <Chartpie />
                <Chartbar/>
                <button>Supprimer</button>
            </div>
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
        select: { id: true, name: true, attendees: true, pincode: true, user_id: true, answers: true },
    });
    const answers = theme.answers.map(answer => {
        return {
            ...answer,
            createdAt: answer.createdAt.toISOString(),
            updatedAt: answer.updatedAt.toISOString()
        }
    });
    return {
        props: {
            theme: {
                ...theme,
                answers
            }
        }
    }
}
