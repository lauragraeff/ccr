import { CodeIcon } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      {/* Menu sidebar */}
      <div className="flex items-center cursor-pointer hover:text-[#00A03C]">
        <CodeIcon onClick={toggleSidebar} />
      </div>
    </>
  );
}
