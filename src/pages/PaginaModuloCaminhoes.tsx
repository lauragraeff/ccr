import Table from "@/components/layout/Table";
import Header from "../components/layout/Header";

export default function PaginaModuloCaminhoes() {
  return (
    <>

      {/* Cabeçalho */}
      <Header />

      {/* Título módulo Caminhões */}
      <div className="flex text-white montserrat mt-7.5 mx-9 sm:mx-18 lg:mx-36 xl:mx-72">
        <h1 className="sm:text-[16px] lg:text-[26px]">Tipos de caminhões</h1>
      </div>

      {/* Tabela */}
      <Table />
    </>
  );
}
