import ProdContainer from "../components/ProdContainer";

export default function Perfil() {
  return (
    <section className="min-h-screen flex flex-col bg-[#212529] text-[#F9FAFB]">
      <header className="bg-[#2A2E33] rounded-2xl p-6 shadow-lg mb-8">
        <h1 className="text-3xl font-semibold text-red-600 mb-2">
          Meus Projetos
        </h1>
        <p className="text-gray-300 text-sm">
          Veja aqui alguns dos meus projetos recentes hospedados no GitHub.
        </p>
      </header>
      <div className="bg-[#2A2E33] rounded-2xl p-6 shadow-lg flex-1">
        <ProdContainer />
      </div>
    </section>
  );
}
