'use client'

import { ContextTransacoes } from "@/contexts/contextTransacoes";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowCircleDownIcon, ArrowCircleUpIcon, X } from "@phosphor-icons/react/dist/ssr";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from 'zod';

const novaEsquemaTransacaoFrom = z.object({
  descricao: z.string(),
  preco: z.number(),
  categoria: z.string(),
  tipo: z.enum(['entrada', 'saida'])
})

type NovaEsquemaTransacaoFromInputs = z.infer<typeof novaEsquemaTransacaoFrom>;

export default function ConteudoDialog(){
  const { criaTransacao } = useContext(ContextTransacoes)

  const { 
    control,
    register, 
    handleSubmit, 
    formState: { isSubmitting },
    reset,
  } = useForm<NovaEsquemaTransacaoFromInputs>({
    resolver: zodResolver(novaEsquemaTransacaoFrom),
    defaultValues: {
      tipo: 'entrada'
    }
  })

  async function acaoCriaNovaTransacao(data: NovaEsquemaTransacaoFromInputs){
    const { descricao, preco, categoria, tipo } = data;

    await criaTransacao({
      descricao,
      preco,
      categoria,
      tipo
    })

    reset();
  }

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
            <form className="flex flex-col gap-1 mt-4" onSubmit={handleSubmit(acaoCriaNovaTransacao)}>
              <input 
                type="text" 
                placeholder="Descrição" 
                required
                {...register('descricao')} 
                className="bg-[var(--background)] w-full rounded-md p-4 focus:outline-none"
              />
              <input 
                type="number"
                placeholder="Preço" 
                required
                {...register('preco', { valueAsNumber: true })} 
                className="bg-[var(--background)] w-full rounded-md p-4 focus:outline-none"
              />
              <input 
                type="text" 
                placeholder="Categoria" 
                required
                {...register('categoria')} 
                className="bg-[var(--background)] w-full rounded-md p-4 focus:outline-none"
              />

              <Controller 
                control={control}
                name="tipo"
                render={( { field } ) => {
                  return(
                    <RadioGroup.Root className="group grid grid-cols-2 gap-5" onValueChange={field.onChange} value={field.value}>
                      <RadioGroup.Item value="entrada" className="data-[state=checked]:bg-[var(--cor-positiva-verde-escuro)] data-[state=checked]:text-[var(--cor-texto-padrao)] flex gap-2 justify-center bg-[var(--cor-off-destaque)] rounded-md p-4 mt-5 cursor-pointer text-[var(--cor-positiva-verde)]">
                        <ArrowCircleUpIcon size={24} />
                        <span className="text-[var(--cor-texto-padrao)]">Entrada</span>
                      </RadioGroup.Item>
                      <RadioGroup.Item value="saida" className="data-[state=checked]:bg-[var(--cor-negativa-vermelho-escuro)] data-[state=checked]:text-[var(--cor-texto-padrao)] flex gap-2 justify-center bg-[var(--cor-off-destaque)] rounded-md p-4 mt-5 cursor-pointer text-[var(--cor-negativa-vermelho)]">
                        <ArrowCircleDownIcon size={24} />
                        <span className="text-[var(--cor-texto-padrao)]">Saída</span> 
                      </RadioGroup.Item>
                    </RadioGroup.Root>
                  )
                }}
              />


              <button
                type="submit" 
                disabled={isSubmitting}
                className="bg-[var(--cor-positiva-verde-escuro)] p-2 my-5 rounded-md font-bold cursor-pointer disabled:opacity-65 disabled:cursor-not-allowed" 
              >Cadastrar</button>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
    )
}