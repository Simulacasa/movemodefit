import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-2">404</h1>
        <p className="text-white/70 mb-6">Página não encontrada</p>
        <a href="/" className="text-emerald-400 hover:text-emerald-300 underline">
          Voltar para a Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
