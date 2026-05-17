import React from 'react';
import Container from '../components/Container';
import BackButton from '../components/BackButton';

const Terms = () => (
    <Container>
        <div className="mb-4">
            <BackButton />
        </div>
        <div className="w-full rounded-2xl bg-slate-900 p-6">
            <h1 className="text-2xl font-semibold mb-4">Terms of Service</h1>
            <p className="text-sm text-slate-400">This is a placeholder for the Terms of Service. Replace with your legal copy.</p>
        </div>
    </Container>
);

export default Terms;
