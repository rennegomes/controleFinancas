"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

interface Transacoes {
    id: number
    descricao: string
    tipo: 'entrada' | 'saida'
    categoria: string
    preco: number
    dataCriacao: string
}

interface ContextTransacoesProps {
    transacoes: Transacoes[];
}

interface TransacoesProviderProps {
    children: ReactNode
}

export const ContextTransacoes = createContext({} as ContextTransacoesProps)

export function TransacoesProvider({ children }: TransacoesProviderProps ){

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
        <ContextTransacoes.Provider value={{ transacoes }}>
            {children}
        </ContextTransacoes.Provider>
    )
}