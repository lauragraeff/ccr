import Table from "@/components/layout/Table";
import Header from "../components/layout/Header";

export default function PaginaModuloCaminhoes() {
  return (
    <>

      {/* Cabeçalho */}
      <Header />

      {/* Título módulo Caminhões */}
      <div className="flex text-white montserrat mt-7.5 mx-18">
        <h1 className="text-[20px]/[49px]">Tipos de caminhões</h1>
      </div>

      {/* Tabela */}
      <Table />
    </>
  );
}
