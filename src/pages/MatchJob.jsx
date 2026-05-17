import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';
import Container from '../components/Container';
import BackButton from '../components/BackButton';

function MatchJob() {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const navigate = useNavigate();
    const cvId = localStorage.getItem('cvId');
    const [error, setError] = useState('');

    const getScoreState = (score) => {
        if (score >= 80) return { label: 'Strong fit', color: 'text-emerald-400', badge: 'bg-emerald-600/90' };
        if (score >= 50) return { label: 'Moderate fit', color: 'text-amber-400', badge: 'bg-amber-600/90' };
        return { label: 'Low fit', color: 'text-red-400', badge: 'bg-red-600/90' };
    };

    const getResultStatus = () => {
        if (!result?.match) return { message: 'Match analysis complete', badge: 'bg-slate-600/90' };
        const score = result.match.score ?? 0;
        const { label, badge } = getScoreState(score);
        return { message: `${label} — score ${score}%`, badge };
    };

    const scoreState = getScoreState(result?.match?.score ?? 0);
    const resultStatus = getResultStatus();

    const handleMatch = async () => {
        if (!cvId) {
            setError('Please upload a CV before matching a job.');
            navigate('/upload');
            return;
        }

        if (!jobTitle || !jobDescription) {
            setError('Please fill in both job title and job description.');
            return;
        }

        try {
            setLoading(true);
            setError('');
            const res = await API.post('/match/analyze', {
                cvId,
                jobTitle,
                jobDescription,
            });
            setResult(res.data.data);
        } catch (err) {
            setError(err?.response?.data?.message || 'Match failed. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <div className="mb-4">
                <BackButton />
            </div>
            <h1 className="text-3xl font-bold mb-4">Match Your CV to a Job</h1>
            <p className="mb-6 text-slate-400">
                Enter the job title and description, then compare them against your uploaded CV.
            </p>

            {error && <div className="mb-4 rounded-2xl bg-red-600/90 p-3 text-sm">{error}</div>}
            {result && (
                <div className={`mb-4 rounded-2xl p-3 text-sm flex items-center gap-2 ${resultStatus.badge}`}>
                    ✓ {resultStatus.message}
                </div>
            )}

            <div className="w-full">
                <input
                    type="text"
                    placeholder="Job Title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full p-2 mb-4 bg-slate-800 text-white rounded"
                />

                <textarea
                    placeholder="Job Description"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="w-full p-2 mb-4 bg-slate-800 text-white rounded h-32"
                />

                <button
                    onClick={handleMatch}
                    className="w-full bg-green-600 px-6 py-2 rounded-lg"
                    disabled={loading}
                >
                    {loading ? 'Matching...' : 'Match Job'}
                </button>
            </div>

            {result && (
                <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl shadow-slate-950/10">
                    <h2 className="text-2xl font-semibold">Match result</h2>
                    <p className="mt-2 text-sm text-slate-400">
                        Required skills found in the job description: {result.requiredSkills?.join(', ') || 'None'}.
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-3xl bg-slate-900 p-4">
                            <h3 className="text-lg font-semibold">Score</h3>
                            <p className={`mt-2 text-4xl font-bold ${scoreState.color}`}>{result.match?.score ?? 0}%</p>
                        </div>
                        <div className="rounded-3xl bg-slate-900 p-4">
                            <h3 className="text-lg font-semibold">Skill gap</h3>
                            <p className="mt-2 text-sm text-slate-300">
                                Matched skills: {result.match?.matchedSkills?.join(', ') || 'None'}
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                Missing skills: {result.match?.missingSkills?.join(', ') || 'None'}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 rounded-3xl bg-slate-900 p-4">
                        <h3 className="text-lg font-semibold">AI advice</h3>
                        <p className="mt-2 text-sm text-slate-300">{result.match?.aiAdvice?.matchSummary || 'No advice available.'}</p>
                        {result.match?.aiAdvice?.applicationAdvice && (
                            <p className="mt-3 text-sm text-slate-300">{result.match.aiAdvice.applicationAdvice}</p>
                        )}
                        {result.match?.recommendations?.length > 0 && (
                            <div className="mt-4 space-y-2">
                                <h4 className="text-sm font-semibold text-slate-200">Recommendations</h4>
                                <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                                    {result.match.recommendations.map((rec, index) => (
                                        <li key={index}>{rec}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Container>
    );
}

export default MatchJob;