import { ContextTransacoes } from "@/contexts/contextTransacoes"
import { useContext } from "react"

export default function useSumario(){
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
    return soma
}
