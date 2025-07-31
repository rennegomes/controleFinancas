'use client';

import { ContextTransacoes } from "@/contexts/contextTransacoes";
import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod';

const esquemaPesquisaFormulario = z.object({
    query: z.string(),
})

type PesquisaFormularioInputs = z.infer<typeof esquemaPesquisaFormulario>;

export default function Pesquisa(){

    const { fetchTransacao } = useContext(ContextTransacoes);

    const { 
        register, 
        handleSubmit, 
        formState: { isSubmitting }
    } = useForm<PesquisaFormularioInputs>({
        resolver: zodResolver(esquemaPesquisaFormulario),
    })

    async function acaoPequisaTransacao(data: PesquisaFormularioInputs){
        await fetchTransacao(data.query);
    }

    return(
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-6 mt-16">
            <form className="flex w-full gap-3" onSubmit={handleSubmit(acaoPequisaTransacao)}>
                <input 
                    type="text"
                    placeholder="Buscar transações"
                    {...register('query')}
                    className="flex-1 bg-[var(--background)] p-2 rounded-md focus:outline-none"
                />
                <button 
                    type="submit"
                    className="flex gap-3 justify-center items-center py-3 px-4 text-[var(--cor-positiva-verde)] bg-transparent border border-[var(--cor-positiva-verde)] rounded-md cursor-pointer transition-all duration-200 hover:enabled:bg-[var(--cor-positiva-verde-escuro)] hover:enabled:text-[var(--cor-texto-destaque)] disabled:opacity-65 disabled:cursor-not-allowed" 
                    disabled={isSubmitting}
                >
                    <MagnifyingGlassIcon size={20} />
                    Buscar
                </button>
            </form>
        </div>
    )
}