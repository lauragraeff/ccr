export default function Table() {
  return (
    <>
      <div>
        <div className="bg-[#1e1e1e] mt-7.5 mx-9 sm:mx-18 lg:mx-36 xl:mx-72 text-white montserrat rounded-sm">
          {/* Cabeçalho da tabela */}
          <div>
            {/* Título da tabela */}
            <div className="border-b border-b-[#2A2E35] ">
              <div className="flex justify-between items-center">
                <h2 className="sm:text-[14px] lg:text-[20px] m-4.5 ">
                  Tipos de caminhões cadastrados
                </h2>
                <button className="bg-[#00A03C33] py-2 px-4 m-4.5 border border-[#00A03C]  hover:bg-[#00A03CB2] hover:cursor-pointer rounded-sm sm:text-[14px] lg:text-[16px]">
                  + Cadastrar caminhão
                </button>
              </div>
            </div>

            {/* Títulos colunas tabela */}
            <div className="flex justify-between items-center border-b border-b-[#2A2E35] mb-3.5">
              <p className="sm:text-[14px] lg:text-[16px] m-4.5">Nome do tipo de caminhão</p>
              <p className="sm:text-[14px] lg:text-[16px] m-4.5">Opções</p>
            </div>
          </div>

          {/* Corpo da tabela */}
          <div className="h-100">
            {/* Se não houver registros */}
            {/* <tr>
                <td>ico-cloud e Mensagem</td>
                </tr> */}

            {/* Registros */}
            <div className="bg-[#2A2E35] flex justify-between items-center mx-4.5 mb-1.25 rounded-sm">
              <p className="m-2">Nome do caminhão</p>
              <i className="bi bi-list text-[18px] m-2 hover:text-[#00A03CB2] hover:cursor-pointer"></i>
            </div>
            <div className="bg-[#2A2E35] flex justify-between items-center mx-4.5 mb-1.25 rounded-sm">
              <p className="m-2">Nome do caminhão</p>
              <i className="bi bi-list text-[18px] m-2 hover:text-[#00A03CB2] hover:cursor-pointer"></i>
            </div>
            <div className="bg-[#2A2E35] flex justify-between items-center mx-4.5 mb-1.25 rounded-sm">
              <p className="m-2">Nome do caminhão</p>
              <i className="bi bi-list text-[18px] m-2 hover:text-[#00A03CB2] hover:cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// TABELA CONTAINER

// <div className="tabela container">
// {/* Cabeçalho tabela */}
// <div>
//     {/* Título da tabela */}
//     <p>Tipos de caminhões cadastrados</p>

//     {/* Botão cadastrar */}
//     <button>+ Cadastrar caminhão</button>
// </div>

// {/* Títulos colunas tabela */}
// <div>
//     <p>Nome do tipo de caminhão</p>
//     <p>Opções</p>
// </div>

// {/* Corpo da tabela */}
// <div>
//     {/* Mensagem caso não haja registros ou então mostrar os registros*/}
//     {/* Mensagem */}
//     <div>
//     <div>Imagem</div>
//     <p>Mensagem</p>
//     </div>

//     {/* Registros tabela */}
//     <div>
//     {/* Nome do tipo de caminhão */}
//     <div>
//         <p>Romeu e julieta</p>
//     </div>

//     {/* Ícone de opções */}
//     <div>
//         <button>menu</button>
//         {/* Modal
//             Título: Opções nome caminhao
//             Botões:
//             ico-img vizualizar imagem
//             ico-edt Editar dados
//             ico-lix Excluir caminhão
//         */}
//     </div>
//     </div>
// </div>
// </div>
