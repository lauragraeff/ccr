export default function Table() {
  return (
    <>
      <div>
        <div className="bg-[#1e1e1e] mt-7.5 mx-9 sm:mt-7.5 sm:mx-18 text-white montserrat rounded-sm">
          {/* Cabeçalho da tabela */}
          <div>
            {/* Título da tabela */}
            <div className="border-b border-b-[#2A2E35]">
                <div className="flex justify-between items-center gap-10">
                  <h2 className="sm:text-[16px] lg:text-[26px] p-2 m-5">
                    Tipos de caminhões cadastrados
                  </h2>
                  <button className="bg-[#00A03C33] py-2 px-4 border border-[#00A03C] m-5 hover:bg-[#00A03CB2] hover:cursor-pointer rounded-sm">+ Cadastrar caminhão</button>
                </div>

            </div>

            {/* Títulos colunas tabela */}
            <div className="flex justify-between py-2 px-4 border-b border-b-[#2A2E35]">
              <p className="p-4">Nome do tipo de caminhão</p>
              <p className="p-4">Opções</p>
            </div>
          </div>

          {/* Corpo da tabela */}
          <tbody>
            {/* Se não houver registros */}
            {/* <tr>
                <td>ico-cloud e Mensagem</td>
                </tr> */}

            {/* Registros */}
            <tr>
              <td>Nome do caminhão</td>
              <td>ico-menu</td>
            </tr>
          </tbody>
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
