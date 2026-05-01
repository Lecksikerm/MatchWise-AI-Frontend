import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import UploadCV from './pages/UploadCV';
import MatchJob from './pages/MatchJob';
import Login from './pages/Login';
import Register from './pages/Register';
import { useContext } from 'react';

const AppShell = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/95 px-4 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <div>
            <NavLink to="/upload" className="text-xl font-semibold text-white">
              MatchWise AI
            </NavLink>
            {user && <p className="text-sm text-slate-400">Logged in as {user.name}</p>}
          </div>
          <nav className="flex flex-wrap items-center gap-3">
            {user ? (
              <>
                <NavLink
                  to="/upload"
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm transition ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                    }`
                  }
                >
                  Upload CV
                </NavLink>
                <NavLink
                  to="/match"
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm transition ${isActive ? 'bg-green-600 text-white' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                    }`
                  }
                >
                  Match Job
                </NavLink>
                <button
                  onClick={logout}
                  className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-700"
                >
                  Register
                </NavLink>
              </>
            )}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Routes>
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <UploadCV />
              </ProtectedRoute>
            }
          />
          <Route
            path="/match"
            element={
              <ProtectedRoute>
                <MatchJob />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to={user ? '/upload' : '/login'} replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppShell />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;