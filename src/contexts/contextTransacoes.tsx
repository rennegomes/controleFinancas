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
    fetchTransacao: (query?: string) => Promise<void>;
}

interface TransacoesProviderProps {
    children: ReactNode
}

export const ContextTransacoes = createContext({} as ContextTransacoesProps)

export function TransacoesProvider({ children }: TransacoesProviderProps ){

    const [transacoes, setTransacoes] = useState<Transacoes[]>([]);
    
        async function fetchTransacao(query?: string){
            const url = new URL('http://localhost:3333/trasacao');

            if (query) {
                url.searchParams.append('q', query);
            };

            const response = await fetch(url)
            const data = await response.json();
    
            setTransacoes(data);
        }
    
        useEffect(() => {
            fetchTransacao();
        }, [])

    return(
        <ContextTransacoes.Provider value={{ 
            transacoes,
            fetchTransacao
        }}>
            {children}
        </ContextTransacoes.Provider>
    )
}