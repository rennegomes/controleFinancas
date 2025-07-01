'use client'
import { useEffect, useState } from "react";
import InfromacoesTabela from "./informacaosTabela";

interface Transacoes{
    id: number
    descricao: string
    tipo: 'entrada' | 'saida'
    categoria: string
    preco: number
    dataCriacao: string
}

export default function Tabela(){
    const [transacoes, setTransacoes] = useState<Transacoes[]>([]);

    async function carregaTransacao(){
        const response = await fetch('http://localhost:3333/trasacao')
        const data = await response.json();

        setTransacoes(data);
    }

    useEffect(() => {
        carregaTransacao();
    }, [])


    return(
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-6 mt-6">
            <table className="w-full border-separate border-spacing-y-2">
                {transacoes.map(transacoes => {
                    return(
                        <InfromacoesTabela key={transacoes.id} id={transacoes.id} descricao={transacoes.descricao} tipo={transacoes.tipo} categoria={transacoes.categoria} preco={transacoes.preco} dataCriacao={transacoes.dataCriacao} />
                    )
                })}
                
            </table>
        </div>
    )
}