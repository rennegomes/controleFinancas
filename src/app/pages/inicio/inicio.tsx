import Cabacalho from "@/app/components/cabecalho/cabecalho";
import Pesquisa from "@/app/components/pesquisa/pesquisa";
import Resumo from "@/app/components/resumo/resumo";
import Tabela from "@/app/components/tabela/tabela";

export default function Inicio() {
  return (
   <div>
      <Cabacalho />
      <Resumo />
      <Pesquisa />
      <Tabela />
   </div>
  );
}
