import React from 'react';
import Container from '../components/Container';
import BackButton from '../components/BackButton';

const Privacy = () => (
    <Container>
        <div className="mb-4">
            <BackButton />
        </div>
        <div className="w-full rounded-2xl bg-slate-900 p-6">
            <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>
            <p className="text-sm text-slate-400">This is a placeholder for the Privacy Policy. Replace with your legal copy.</p>
        </div>
    </Container>
);

export default Privacy;
