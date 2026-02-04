export default function Table() {
  return (
    <>
      <div>
        <table className="bg-[#1e1e1e] mt-7.5 mx-18 text-white montserrat border-spacing-x-6">
          {/* Cabeçalho da tabela */}
          <thead>
            {/* Título da tabela */}
            <tr className="">
              <th colSpan={3} className="">
                <div className="flex justify-between items-center gap-10">
                  <h2 className="sm:text-[16px] lg:text-[26px] p-4">
                    Tipos de caminhões cadastrados
                  </h2>
                  <button className="p-4">+ Cadastrar caminhão</button>
                </div>
              </th>
            </tr>

            {/* Títulos colunas tabela */}
            <tr>
              <th>Nome do tipo de caminhão</th>
              <th>Opções</th>
            </tr>
          </thead>

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
        </table>
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
