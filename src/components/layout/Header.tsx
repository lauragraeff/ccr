import avatar from "@/assets/avatar.jpg";
import { CustomTrigger } from "@/features/sidebar/CustomTrigger";
import { useIsMobile } from "@/hooks/use-mobile";
import classNames from "classnames";
export default function Header() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Cabeçalho */}
      <div className="bg-[#1e1e1e] text-white montserrat p-4 flex justify-between">
        <div
          className={classNames("flex items-center", isMobile ? "" : "hidden")}
        >
          <CustomTrigger />
        </div>

        {/* Usuário e avatar */}
        <div className="flex gap-1">
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
      </div>
    </>
  );
}

// Ver como faz para mudar imagem e editar dados do usuário
