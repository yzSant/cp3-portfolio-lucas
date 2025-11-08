import { Github, ExternalLink } from "lucide-react";

export default function ProdCard({ repo }) {
  return (
    <div className="group bg-[#1E1E1E] rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 border border-gray-700 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold text-white group-hover:text-red-600 mb-2">
          {repo.name}
        </h2>
        <p className="text-gray-300 text-sm line-clamp-3 mb-4">
          {repo.description}
        </p>
      </div>

      <div className="flex justify-between items-center text-sm mt-auto">
        <span className="px-3 py-1 bg-red-900 text-red-200 rounded-full">
          {repo.language || "N/A"}
        </span>

        <div className="flex gap-3">
          {repo.html_url && (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="Ver no GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="Ver projeto online"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
