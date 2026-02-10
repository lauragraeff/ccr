import Table from "@/components/layout/Table";
import Header from "../components/layout/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/AppSidebar";

export default function PaginaModuloCaminhoes() {
  return (
    <>
      {/* Cabeçalho */}
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <div className="w-full">
          <Header />

          {/* Título módulo Caminhões */}
          <div className="flex text-white montserrat mt-7.5 mx-9 sm:mx-18 lg:mx-27 xl:mx-36">
            <h1 className="sm:text-[16px] lg:text-[20px]">
              Tipos de caminhões
            </h1>
          </div>

          {/* Tabela */}
          <Table />
        </div>
      </SidebarProvider>
    </>
  );
}
