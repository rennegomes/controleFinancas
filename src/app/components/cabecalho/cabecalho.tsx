import * as Dialog from "@radix-ui/react-dialog";
import ConteudoDialog from "../conteudoDialog/conteudoDialog";

export default function Cabacalho() {
  return (
   <div className="bg-[var(--background)] pt-10 pb-28">
    <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-6">
      <div></div>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="bg-[var(--cor-positiva-verde-escuro)] text-[var(--cor-texto-destaque)] font-bold h-12 px-5 rounded-sm cursor-pointer hover:bg-[var(--cor-positiva-verde)] transition-all duration-200">
            Nova transação
          </button>
        </Dialog.Trigger>
        <ConteudoDialog />
      </Dialog.Root>

    </div>
   </div>
  );
}