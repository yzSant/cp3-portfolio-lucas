import { Link } from "react-router-dom";
import logo from "../assets/logobg.png";

export default function Navbar() {
  return (
    <aside className="w-16 h-screen bg-red-800 text-[#e5e5e5] shadow-md">
      <div className="p-4 flex flex-col items-center h-full">
        <Link to="/" className="mb-6">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain"/>
        </Link>

        <nav className="flex flex-col gap-6 mt-4">
          <Link
            to="/perfil"
            title="Projetos"
            className="p-2 rounded hover:bg-white/10 flex items-center justify-center"
            aria-label="Perfil - Projetos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
          </Link>

          <Link
            to="/carrinho"
            title="Contato"
            className="p-2 rounded hover:bg-white/10 flex items-center justify-center"
            aria-label="Carrinho - Contato"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </Link>
        </nav>

        <div className="mt-auto" />
      </div>
    </aside>
  );
}