import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';
import Container from '../components/Container';
import BackButton from '../components/BackButton';

function UploadCV() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUpload = async () => {
        if (!file) {
            setError('Please select a CV file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('cv', file);

        try {
            setLoading(true);
            setError('');

            const res = await API.post('/cv/upload', formData);
            const cvData = res.data.data;

            setResult({ ...cvData, serverMessage: res.data.message });
            localStorage.setItem('cvId', cvData._id);
        } catch (err) {
            setError(err?.response?.data?.message || 'Upload failed. Please try again.');
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
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-xl shadow-slate-950/20">
                <h1 className="text-3xl font-bold mb-6">Upload Your CV</h1>
                <p className="mb-6 text-slate-400">
                    Upload a PDF or DOCX file and get a quick skill extraction plus an AI summary.
                </p>

                <label className="block rounded-3xl border border-dashed border-slate-700 bg-slate-950 p-6 text-center text-slate-400 hover:border-blue-500">
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="hidden"
                    />
                    <span className="block">Click to choose a file</span>
                    {file && <span className="mt-2 block text-sm text-slate-200">{file.name}</span>}
                </label>

                {error && <div className="mt-4 rounded-2xl bg-red-600/90 p-3 text-sm">{error}</div>}
                {result && <div className="mt-4 rounded-2xl bg-emerald-600/90 p-3 text-sm flex items-center gap-2">✓ Upload successful</div>}

                <button
                    type="button"
                    onClick={handleUpload}
                    className="mt-4 w-full rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={loading}
                >
                    {loading ? 'Uploading CV...' : 'Upload CV'}
                </button>

                {result && (
                    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950 p-6">
                        <div className="mb-4 flex flex-col gap-2 rounded-3xl bg-slate-900 p-4">
                            <h2 className="text-2xl font-semibold">Upload summary</h2>
                            <p className="text-sm text-slate-400">
                                {result.serverMessage || 'CV uploaded successfully.'}
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-3xl bg-slate-900 p-4">
                                <h3 className="text-lg font-semibold">Extracted Skills</h3>
                                <p className="mt-2 text-sm text-slate-300">
                                    {result.parsedData?.skills?.length > 0
                                        ? result.parsedData.skills.join(', ')
                                        : 'No skills were detected in your CV.'}
                                </p>
                            </div>
                            <div className="rounded-3xl bg-slate-900 p-4">
                                <h3 className="text-lg font-semibold">AI Summary</h3>
                                <p className="mt-2 text-sm text-slate-300">
                                    {result.aiAnalysis?.summary || 'No summary available yet.'}
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <button
                                type="button"
                                onClick={() => navigate('/match')}
                                className="w-full rounded-3xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 sm:w-auto"
                            >
                                Go to job matching
                            </button>
                            <p className="text-sm text-slate-400 sm:ml-4">
                                After upload, head to the job matching page to score your CV and get AI advice.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
}

export default UploadCV;
