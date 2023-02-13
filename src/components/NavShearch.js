import { RiMoneyDollarBoxLine, RiRoadMapLine, RiSearch2Line, RiShoppingCart2Line, RiUser2Line } from "react-icons/ri"
import logo from '../logo.svg';
const NavShearsh = () => {
return (
<>
    <div className="cursor-pointer xl:flex xl:mx-7 xl:flex-row flex flex-row justify-around items-center bg-slate-700 dark:bg-slate-50 w-full p-1">
        <img src={logo} className="animate-bounce w-12" alt="" />
        <div className="flex">
            <div className="flex justify-between items-center bg-[#56b533] border-[#56b533] border  text-gray-100 dark:text-orange-400 dark:bg-slate-700 mb-1 lg:justify-center lg:px-5 lg:space-x-5 lg:rounded-l-md lg:mb-0 hover:text-[#56b533] hover:bg-gray-50 hover:border dark:border-slate-700">
                <span className="text-md font-semibold">Localidad</span>
                <RiRoadMapLine className="text-md "/>
            </div>
            <input type="search"  className="my-0.5 border-[#56b533] outline-none place-content-center placeholder:text-gray-300 placeholder:font-thin placeholder:text-center text-gray-600 font-semibold " placeholder="Buscar productos"/>
            <button  className="bg-[#56b533] border border-[#56b533] px-3 text-gray-100 lg:px-5 rounded-r-md hover:bg-gray-50 hover:text-[#56b533] hover:border-l text-md dark:bg-slate-700 dark:text-orange-400 dark:border-slate-700">
                <RiSearch2Line/>
            </button>
        </div>
        <div className="flex space-x-4 text-gray-100 dark:text-orange-500">
            <RiShoppingCart2Line className="hover:text-[#FF33C4] "/>
            <RiMoneyDollarBoxLine className="hover:text-[#85BB65] "/>
            <RiUser2Line className="hover:text-[#33A8FF] "/>
        </div>

    </div>
              
</>
)
}
export default NavShearsh