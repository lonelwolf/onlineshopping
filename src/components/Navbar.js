import logo from '../logo.svg';
import { RiGithubFill, RiMoonFill, RiSunLine, RiTranslate } from 'react-icons/ri';
import { useEffect, useState } from 'react';


const Navbar = () =>  {
    const [thema, setShow] = useState(false);
    const toggleThema = () =>{
        setShow(!thema);
      }

    const [lengua, setLengua] = useState(false);
    const toggleLengua = () =>{
        setLengua(!lengua);
      }
         
    /*modo oscuro por switcheo*/
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme("dark");
        }else{setTheme("light")}
    }, []);
    
    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    
    const modoDark = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    };



    return(
        <div className="fixed top-0 flex flex-row justify-evenly shadow-md border-b border-gray-200 dark:border-orange-300 bg-slate-50 dark:bg-zinc-800 py-3 w-full">
            <div>
            <img src={logo} className="animate-bounce w-12" alt="" />
            </div>
            <div className="flex flex-row items-center space-x-3 text-zinc-400 dark:text-orange-400">
                <section id="proyectos">Proyectos</section>
                <section id="estudios">Estudios</section>
                <section id="cv">CV</section>
            </div>
            <div  className="flex flex-row items-center space-x-6 text-xl font-bold">
                <div onClick={modoDark} className="text-xl">
                    <button onClick={toggleThema} >
                        {thema ?
                                <RiSunLine className="text-orange-400 hover:text-orange-700"/>
                                :
                                <RiMoonFill className="text-gray-500 hover:text-slate-700 dark:text-gray-100 dark:hover:text-blue-400"/>
                            }
                    </button>
                </div>

                <button onClick={toggleLengua} className="flex items-center space-x-1">
                    <RiTranslate className="text-blue-400 dark:text-gray-100"/>
                    <p className={`${lengua ? "text-blue-500 hover:text-blue-700" : "text-red-400 hover:text-red-600"}`}>
                        {lengua ? "En" : "Es"}
                    </p>

                </button>    
                <button className="text-violet-500 hover:text-violet-800 dark:hover:text-violet-300">
                    <RiGithubFill />
                </button>
            </div>

                    
        </div>

    )
}
export default Navbar