import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react/dist/ssr";

export default function Resumo() {
  return (
   <div className="flex justify-between overflow-x-auto whitespace-nowrap md:grid grid-cols-3 gap-8 mt-[-5rem] w-full max-w-6xl mx-auto px-6 pb-2">

    <div className="flex flex-col bg-[var(--cor-destaque)] p-5 rounded-md">
        <div className="flex justify-between items-center pb-5">
            <span>Entradas</span>
            <ArrowCircleUp size={32} className="text-[var(--cor-positiva-verde)]" />
        </div>
        <strong className="text-[var(--cor-texto-destaque)] text-2xl">R$ 15.500,00</strong>
        <span className="text-[var(--cor-texto-sem-destaque)] text-sm">Última entrada em 13 de abril</span>
    </div>

    <div className="flex flex-col bg-[var(--cor-destaque)] p-5 rounded-md">
        <div className="flex justify-between items-center pb-5">
            <span>Saídas</span>
            <ArrowCircleDown size={32} className="text-[var(--cor-negativa-vermelho)]" />
        </div>
        <strong className="text-[var(--cor-texto-destaque)] text-2xl">R$ 15.500,00</strong>
        <span className="text-[var(--cor-texto-sem-destaque)] text-sm">Última entrada em 13 de abril</span>
    </div>

    <div className="flex flex-col bg-[var(--cor-positiva-verde-escuro)] p-5 rounded-md">
        <div className="flex justify-between items-center pb-5">
            <span>Total</span>
            <CurrencyDollar size={32} className="text-[var(--cor-texto-destaque)]" />
        </div>
        <strong className="text-[var(--cor-texto-destaque)] text-2xl">R$ 15.500,00</strong>
        <span className="text-sm">Última entrada em 13 de abril</span>
    </div>

   </div>
  );
}