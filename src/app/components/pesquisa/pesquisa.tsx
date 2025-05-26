import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";

export default function Pesquisa(){
    return(
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-6 mt-16">
            <form className="flex w-full gap-3">
                <input 
                    type="search"
                    name="" 
                    id="" 
                    placeholder="Buscar transações"
                    className="flex-1 bg-[var(--background)] p-2 rounded-md focus:outline-none"
                />
                <div className="flex gap-3 justify-center items-center py-3 px-4 text-[var(--cor-positiva-verde)] bg-transparent border border-[var(--cor-positiva-verde)] rounded-md cursor-pointer">
                    <MagnifyingGlassIcon size={20} />
                    <input 
                        type="button" 
                        value="Buscar"
                        className="cursor-pointer max-sm:hidden"
                    />
                </div>
            </form>
        </div>
    )
}