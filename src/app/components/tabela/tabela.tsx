import InfromacoesTabela from "./informacaosTabela";

export default function Tabela(){
    return(
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-6 mt-6">
            <table className="w-full border-separate border-spacing-y-2">
                <InfromacoesTabela corEntradaESaida="entrada"/>
                <InfromacoesTabela corEntradaESaida="saida"/>
            </table>
        </div>
    )
}