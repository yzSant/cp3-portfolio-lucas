import ProdCard from "../components/ProdCard";
import ProdContainer from "../components/ProdContainer";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Nossos Produtos</h1>
      <ProdContainer title="Produtos de destaque">
      </ProdContainer>
    </div>
  );
}