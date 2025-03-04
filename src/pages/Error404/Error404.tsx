import React from 'react';
import {useNavigate} from 'react-router';
import illustration404 from '@/assets/404-illustration.svg';
import {Button} from "@/components/ui/Button.tsx";

export const Error404: React.FC = () => {
    const navigate = useNavigate();
    return (<div
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4 text-center">
        <div className="mb-8">
            <img src={illustration404} alt="Illustration 404" className="max-w-xs"/>
        </div>
        <h1 className="text-8xl font-bold text-rose-500 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">
            Oups ! La page que vous recherchez n'existe pas.
        </p>
        <Button variant="default" onClick={() => navigate('/')}>
            Retour à l'accueil
        </Button>
    </div>);
};