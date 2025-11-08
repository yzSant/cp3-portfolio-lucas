import perfil from "../assets/perfil.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [githubUser, setGithubUser] = useState("yzSant"); 

  return (
    <section className="flex flex-col md:flex-row items-start gap-10 w-full h-full">
      {/* Perfil e Bio */}
      <div className="flex flex-col items-center md:items-start w-full md:w-1/3 bg-[#2A2E33] rounded-2xl p-6 shadow-lg">
        <img
          src={perfil}
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full border-4 border-red-800 object-cover mb-4"
        />
        <h1 className="text-2xl font-semibold text-white mb-2">
          Lucas Santana
        </h1>
        <h2 className="text-red-500 text-sm font-medium mb-4">
          Desenvolvedor Front-End
        </h2>
        <p className="text-[#d1d5db] text-sm leading-relaxed text-justify">
          Sou um desenvolvedor front-end apaixonado por transformar ideias em
          experiências digitais. Busco sempre unir competência técnica e
          sensibilidade humana, criando interfaces que comuniquem, inspirem e
          facilitem a vida das pessoas. Atualmente, curso Engenharia de Software
          na FIAP com bolsa integral e atuo como estagiário de Educação Digital
          no Colégio Visconde de Porto Seguro.
        </p>
      </div>

      <div className="flex flex-col flex-1 gap-8">
        <div className="bg-[#2A2E33] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            Competências
          </h3>
          <ul className="flex flex-wrap gap-3">
            {[
              "React",
              "HTML",
              "Python",
              "JavaScript",
              "Figma",
              "UX",
              "TailwindCSS",
            ].map((skill) => (
              <li
                key={skill}
                className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#2A2E33] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            Formação e Experiência
          </h3>
          <ul className="space-y-3 text-[#d1d5db] text-sm">
            <li>Ensino Médio Técnico em Desenvolvimento de Sistemas</li>
            <li>Graduando em Engenharia de Software — FIAP (100% bolsa)</li>
            <li>
              Estagiário de Educação Digital — Colégio Visconde de Porto Seguro
            </li>
          </ul>
        </div>
        <div className="bg-[#2A2E33] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            Atividade no GitHub
          </h3>
          <div className="overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/${githubUser}`}
              alt="Gráfico de atividade do GitHub"
              className="w-full min-w-[500px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
