"use client";
import { api } from "@/lib/axios";
import { createContext, ReactNode, useEffect, useState } from "react";


interface Transacoes {
    id: number
    descricao: string
    tipo: 'entrada' | 'saida'
    categoria: string
    preco: number
    dataCriacao: string
}

interface CriaTransacaoInput{
    descricao: string,
    preco: number,
    categoria: string,
    tipo: 'entrada' | 'saida',
}

interface ContextTransacoesProps {
    transacoes: Transacoes[];
    fetchTransacao: (query?: string) => Promise<void>;
    criaTransacao: (data: CriaTransacaoInput) => Promise<void>;
}

interface TransacoesProviderProps {
    children: ReactNode
}

export const ContextTransacoes = createContext({} as ContextTransacoesProps)

export function TransacoesProvider({ children }: TransacoesProviderProps ){

    const [transacoes, setTransacoes] = useState<Transacoes[]>([]);
    
        async function fetchTransacao(query?: string){
        
            const response = await api.get('transacao', {
                params: {
                    _sort: 'dataCriacao',
                    _order: 'desc',
                    'q': query,
                }
            })
    
            setTransacoes(response.data);
        }
    
        async function criaTransacao(data: CriaTransacaoInput) {
            const { descricao, preco, categoria, tipo } = data;

            const response = await api.post('transacao', {
            descricao,
            preco,
            categoria,
            tipo,
            dataCriacao: new Date(),
        })

            setTransacoes(state => [response.data, ...state]);
        }

        useEffect(() => {
            fetchTransacao();
        }, [])

    return(
        <ContextTransacoes.Provider value={{ 
            transacoes,
            fetchTransacao,
            criaTransacao
        }}>
            {children}
        </ContextTransacoes.Provider>
    )
}