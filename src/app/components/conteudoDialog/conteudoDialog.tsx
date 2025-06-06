import { ArrowCircleDownIcon, ArrowCircleUpIcon, X } from "@phosphor-icons/react/dist/ssr";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export default function ConteudoDialog(){
    return(
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 w-screen h-screen bg-[var(--background)]/50" />

          <Dialog.Content className="fixed p-4 bg-[var(--cor-destaque)] rounded-t-3xl pt-5 left-0 right-0 max-sm:bottom-0 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-md md:max-h-[85vh] md:w-[90vw] md:max-w-[500px]">
            <div className="flex justify-between">
              <Dialog.Title className="text-[17px] font-medium">Nova Transação</Dialog.Title>

              <Dialog.Close asChild>
                <button className="font-bold cursor-pointer">
                  <X size={20} />
                </button>
              </Dialog.Close>
            </div>
            <form className="flex flex-col gap-1 mt-4">
              <input 
                type="text" 
                name="" 
                id="" 
                placeholder="Descrição" 
                required 
                className="bg-[var(--background)] w-full rounded-md p-4 focus:outline-none"
              />
              <input 
                type="number"
                name="" 
                id="" 
                placeholder="Preço" 
                required 
                className="bg-[var(--background)] w-full rounded-md p-4 focus:outline-none"
              />
              <input 
                type="text" 
                name="" 
                id="" 
                placeholder="Categoria" 
                required 
                className="bg-[var(--background)] w-full rounded-md p-4 focus:outline-none"
              />

              <RadioGroup.Root className="group grid grid-cols-2 gap-5">
                <RadioGroup.Item value="Entrada" className="data-[state=checked]:bg-[var(--cor-positiva-verde-escuro)] data-[state=checked]:text-[var(--cor-texto-padrao)] flex gap-2 justify-center bg-[var(--cor-off-destaque)] rounded-md p-4 mt-5 cursor-pointer text-[var(--cor-positiva-verde)]">
                  <ArrowCircleUpIcon size={24} />
                  <span className="text-[var(--cor-texto-padrao)]">Entrada</span>
                </RadioGroup.Item>
                <RadioGroup.Item value="Saida" className="data-[state=checked]:bg-[var(--cor-negativa-vermelho-escuro)] data-[state=checked]:text-[var(--cor-texto-padrao)] flex gap-2 justify-center bg-[var(--cor-off-destaque)] rounded-md p-4 mt-5 cursor-pointer text-[var(--cor-negativa-vermelho)]">
                  <ArrowCircleDownIcon size={24} />
                  <span className="text-[var(--cor-texto-padrao)]">Saída</span> 
                </RadioGroup.Item>
              </RadioGroup.Root>

              <input 
                type="submit" 
                value="Cadastrar" 
                className="bg-[var(--cor-positiva-verde-escuro)] p-2 my-5 rounded-md font-bold cursor-pointer" 
              />
            </form>
          </Dialog.Content>
        </Dialog.Portal>
    )
}