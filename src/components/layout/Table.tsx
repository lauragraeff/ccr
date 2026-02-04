export default function Table() {
  return (
    <>
      <div>
        <table className="bg-[#1e1e1e]">
          {/* Cabeçalho da tabela */}
          <thead>
              {/* Título da tabela */}
            <tr>
              <th>Tipos de caminhões cadastrados</th>
              <th>
                <button>+ Cadastrar caminhão</button>
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