import { precoFormato } from "@/utils/formatacao";

interface InformacoesTabelaProps {
    id: number
    descricao: string
    tipo: 'entrada' | 'saida'
    categoria: string
    preco: number
    dataCriacao: string
}

export default function InfromacoesTabela(props: InformacoesTabelaProps){
    return(
        <tbody>
            <tr className="max-sm:hidden">
                <td className="bg-[var(--cor-destaque)] w-1/2 first:rounded-l-md last:rounded-r-md py-5 px-8">{props.descricao}</td>
                <td className={props.tipo === "saida" ? "text-[var(--cor-negativa-vermelho)] bg-[var(--cor-destaque)] w-1/3 first:rounded-l-md last:rounded-r-md py-5 px-8" : "text-[var(--cor-positiva-verde)] bg-[var(--cor-destaque)] w-1/3 first:rounded-l-md last:rounded-r-md py-5 px-8"}>
                    {props.tipo === 'saida' && '- '}
                    {precoFormato.format(props.preco)}
                </td>
                <td className="bg-[var(--cor-destaque)] first:rounded-l-md last:rounded-r-md py-5 px-8">{props.categoria}</td>
                <td className="bg-[var(--cor-destaque)] first:rounded-l-md last:rounded-r-md py-5 px-8">{props.dataCriacao}</td>
            </tr>

            <tr className="sm:hidden">
                <td className="bg-[var(--cor-destaque)] first:rounded-l-md last:rounded-r-md py-5 px-8">
                    <div className="flex flex-col gap-2">
                        <span>{props.descricao}</span>
                        <span className={props.tipo === "saida" ? "text-[var(--cor-negativa-vermelho)] font-bold text-xl" : "text-[var(--cor-positiva-verde)] font-bold text-xl"}>
                            {props.tipo === 'saida' && '- '}
                            {precoFormato.format(props.preco)}
                        </span>
                    </div>
                    <div className="flex justify-between pt-4 text-sm text-[var(--cor-texto-sem-destaque)]">
                        <span>{props.categoria}</span>
                        <samp>{props.dataCriacao}</samp>
                    </div>
                </td>
            </tr>
        </tbody>
    )
}