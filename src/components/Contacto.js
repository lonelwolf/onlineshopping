import React from "react"
import { RiAtLine, RiCellphoneLine, RiContactsLine, RiFileUserLine, RiHashtag, RiMailLine, RiRoadMapLine } from "react-icons/ri"
import { useModal } from "../hook/useModal";
import img from "../img/contact-2.png"
import Modal from "./Modal"



const Contacto = () => {
    const [isOpenModal, openModal, closeModal] = useModal(false);

    return(
        <div className="relative flex justify-evenly space-x-6 dark:bg-white bg-slate-700 shadow-md text-orange-400  dark:text-slate-600 mt-32 w-[1024px] p-10">
           <div className="flex items-center">
            <img src={img} alt="contacto" className="scale-110 p-3"/>
           </div>
           <div className="flex flex-col justify-center items-center space-y-5">
                    <RiContactsLine className="text-3xl"/>  
                    <div className="flex flex-col items-start space-y-3 ">
                        <div className="flex flex-row justify-evenly items-center text-2xl space-x-3">
                            <RiFileUserLine/>
                            <h5 className=""> Daniet Rosabal Lemus </h5>
                        </div>
                        <div className="flex flex-row justify-evenly items-center text-2xl space-x-3">
                            <RiAtLine/>
                            <h5 className="flex items-center"> contact@gmail.com </h5>
                        </div>
                        <div className="flex flex-row justify-evenly items-center text-2xl space-x-3">
                            <RiCellphoneLine/>
                            <h5 className="">53020309</h5>
                        </div>
                        <div className="flex flex-row justify-evenly items-center text-2xl space-x-3">
                            <RiRoadMapLine/>
                            <h5 className="">Sección C #60 La Habana</h5>
                        </div>
                    </div>
            </div>
            <button onClick={openModal} className="absolute top-3 right-3 animate-bounce text-xl text-orange-400 dark:text-slate-600 hover:text-green-700 dark:hover:text-green-400">
                    <RiMailLine/>
            </button>
                <Modal isOpen={isOpenModal} closeModal={closeModal}>
                    <div className="flex flex-col justify-center items-center space-y-5">
                        <RiContactsLine className="text-3xl"/>  
                        <div className="flex flex-col items-start space-y-3 ">
                            <div className="flex flex-row justify-evenly items-center text-2xl space-x-3">
                                <RiFileUserLine/>
                                <h5 className=""> Daniet Rosabal Lemus </h5>
                            </div>
                            <div className="flex flex-row justify-evenly items-center text-2xl space-x-3">
                                <RiAtLine/>
                                <h5 className="flex items-center"> contact@gmail.com </h5>
                            </div>
                            <div className="flex flex-row justify-evenly items-center text-2xl space-x-3">
                                <RiCellphoneLine/>
                                <h5 className="">53020309</h5>
                            </div>
                            <div className="flex flex-row justify-evenly items-center text-2xl space-x-3">
                                <RiRoadMapLine/>
                                <h5 className="">Sección C #60 La Habana</h5>
                            </div>
                        </div>
                    </div>
                </Modal>


                            
                            
                            
                                                                                        


                 
          
                
        

        </div>
    )
}
export default Contacto

                
                