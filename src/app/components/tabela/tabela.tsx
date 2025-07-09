'use client'
import { useContext, useEffect, useState } from "react";
import InfromacoesTabela from "./informacaosTabela";
import { ContextTransacoes } from "@/contexts/contextTransacoes";
import { dataFormato } from "@/utils/formatacao";

export default function Tabela(){
    const { transacoes } = useContext(ContextTransacoes)


    return(
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-6 mt-6">
            <table className="w-full border-separate border-spacing-y-2">
                {transacoes.map(transacoes => {
                    return(
                        <InfromacoesTabela key={transacoes.id} id={transacoes.id} descricao={transacoes.descricao} tipo={transacoes.tipo} categoria={transacoes.categoria} preco={transacoes.preco} dataCriacao={dataFormato.format(new Date(transacoes.dataCriacao))} />
                    )
                })}
                
            </table>
        </div>
    )
}