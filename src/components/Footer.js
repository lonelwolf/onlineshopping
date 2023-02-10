import { RiContrast2Line, RiFacebookCircleLine, RiFolder2Line, RiMailLine, RiWebcamLine, RiYoutubeLine } from "react-icons/ri"

const Footer = () => {
    return(
        <div className="absolute bottom-0 flex flex-col text-gray-100 bg-zinc-600 w-full">
            <div className="flex flex-row justify-around p-3">
                <div className="flex flex-col items-center text-xl">
                    <RiContrast2Line/>
                    <strong className="uppercase font-semibold">contacto</strong>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <RiFolder2Line/>
                    <strong className="uppercase font-semibold">proyectos</strong>
                </div>
            </div>
            <div className="flex flex-row justify-center space-x-6 items-center text-xl bg-slate-800 p-2">
                <RiWebcamLine className="hover:text-green-600"/>
                <RiFacebookCircleLine className="hover:text-blue-600"/>
                <RiYoutubeLine className="hover:text-red-700"/>
                <RiMailLine className="hover:text-orange-500"/>
            </div>

        </div>


    )
}
export default Footer