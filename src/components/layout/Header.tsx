import avatar from "@/assets/avatar.jpg";

export default function Header() {
  return (
    <>
      {/* Avatar e usuário logado */}
      <div className="bg-[#1e1e1e] text-white montserrat p-4 flex justify-end gap-1">
        {/* Usuário */}
        <div className="flex flex-col justify-center">
          <p>Nome do Usuário</p>
          <p className="text-[#00A03C]">Admin</p>
        </div>

        {/* Avatar */}
        <div className="">
          <img
            src={avatar}
            alt="Avatar usuário"
            className="w-10 h-10 rounded-3xl"
          />
        </div>
      </div>
    </>
  );
}


// Ver como faz para mudar imagem e editar dados do usuário
