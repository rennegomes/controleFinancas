interface InformacoesTabelaProps {
    corEntradaESaida: "entrada" | "saida"
}

export default function InfromacoesTabela(props: InformacoesTabelaProps){
    return(
        <>
            <tr className="max-sm:hidden">
                <td className="bg-[var(--cor-destaque)] w-1/2 first:rounded-l-md last:rounded-r-md py-5 px-8">Desenvolvimento de site</td>
                <td className={props.corEntradaESaida === "saida" ? "text-[var(--cor-negativa-vermelho)] bg-[var(--cor-destaque)] w-1/3 first:rounded-l-md last:rounded-r-md py-5 px-8" : "text-[var(--cor-positiva-verde)] bg-[var(--cor-destaque)] w-1/3 first:rounded-l-md last:rounded-r-md py-5 px-8"}>R$ 12.000,00</td>
                <td className="bg-[var(--cor-destaque)] first:rounded-l-md last:rounded-r-md py-5 px-8">Venda</td>
                <td className="bg-[var(--cor-destaque)] first:rounded-l-md last:rounded-r-md py-5 px-8">13/04/2022</td>
            </tr>

            <tr className="sm:hidden">
                <td className="bg-[var(--cor-destaque)] first:rounded-l-md last:rounded-r-md py-5 px-8">
                    <div className="flex flex-col gap-2">
                        <span>Desenvolvimento de site</span>
                        <span className={props.corEntradaESaida === "saida" ? "text-[var(--cor-negativa-vermelho)] font-bold text-xl" : "text-[var(--cor-positiva-verde)] font-bold text-xl"}>R$ 12.000,00</span>
                    </div>
                    <div className="flex justify-between pt-4 text-sm text-[var(--cor-texto-sem-destaque)]">
                        <span>Venda</span>
                        <samp>13/04/2022</samp>
                    </div>
                </td>
            </tr>
        </>
    )
}