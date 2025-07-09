'use client'
import { ContextTransacoes } from "@/contexts/contextTransacoes";
import { precoFormato } from "@/utils/formatacao";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";

export default function Resumo() {
    const { transacoes } = useContext(ContextTransacoes)

    const soma = transacoes.reduce(
        (acc, transacao) =>{

            if(transacao.tipo === 'entrada'){
                acc.entrada += transacao.preco
                acc.total += transacao.preco
            }else{
                acc.saida += transacao.preco
                acc.total -= transacao.preco
            }

            return acc;
        },
        {
            saida: 0,
            entrada: 0,
            total: 0
        }
    )

  return (
   <div className="flex justify-between overflow-x-auto whitespace-nowrap md:grid grid-cols-3 gap-8 mt-[-5rem] w-full max-w-6xl mx-auto px-6 pb-2">

    <div className="flex flex-col bg-[var(--cor-destaque)] p-5 rounded-md">
        <div className="flex justify-between items-center pb-5">
            <span>Entradas</span>
            <ArrowCircleUp size={32} className="text-[var(--cor-positiva-verde)]" />
        </div>
        <strong className="text-[var(--cor-texto-destaque)] text-2xl">{precoFormato.format(soma.entrada)}</strong>
        <span className="text-[var(--cor-texto-sem-destaque)] text-sm">Última entrada em 13 de abril</span>
    </div>

    <div className="flex flex-col bg-[var(--cor-destaque)] p-5 rounded-md">
        <div className="flex justify-between items-center pb-5">
            <span>Saídas</span>
            <ArrowCircleDown size={32} className="text-[var(--cor-negativa-vermelho)]" />
        </div>
        <strong className="text-[var(--cor-texto-destaque)] text-2xl">{precoFormato.format(soma.saida)}</strong>
        <span className="text-[var(--cor-texto-sem-destaque)] text-sm">Última entrada em 13 de abril</span>
    </div>

    <div className="flex flex-col bg-[var(--cor-positiva-verde-escuro)] p-5 rounded-md">
        <div className="flex justify-between items-center pb-5">
            <span>Total</span>
            <CurrencyDollar size={32} className="text-[var(--cor-texto-destaque)]" />
        </div>
        <strong className="text-[var(--cor-texto-destaque)] text-2xl">{precoFormato.format(soma.total)}</strong>
        <span className="text-sm">Última entrada em 13 de abril</span>
    </div>

   </div>
  );
}