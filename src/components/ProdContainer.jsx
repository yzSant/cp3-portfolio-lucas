import { useEffect, useState } from "react";
import ProdCard from "./ProdCard";

export default function ProdContainer() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USER = "yzSant";

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=12`
        );
        if (!response.ok) throw new Error("Erro ao buscar repositórios");
        const data = await response.json();
        const filtered = data.filter(repo => !repo.fork && repo.description);
        setRepos(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  if (loading)
    return (
      <p className="text-gray-400 text-center py-8 animate-pulse">
        Carregando projetos...
      </p>
    );
  if (error)
    return (
      <p className="text-red-500 text-center py-8">
        Ocorreu um erro: {error}
      </p>
    );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <ProdCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
