import React from "react"
import { RiAtLine, RiCellphoneLine, RiContactsLine, RiFileUserLine, RiMailLine, RiRoadMapLine } from "react-icons/ri"
import { useModal } from "../hook/useModal";
import img from "../img/contact-2.png"
import ContactForm from "./ContactForm";
import Modal from "./Modal"



const Contacto = () => {
    const [isOpenModal, openModal, closeModal] = useModal(false);

    return(
        <div className="relative flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-6  bg-slate-700 dark:bg-white shadow-md text-orange-400  dark:text-slate-600 mt-32 3xl:w-3/4 py-6 px-4">
           <div className="">
             <img src={img} alt="contacto" className="p-3"/>
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
            <button onClick={openModal} className="absolute top-0 right-3 animate-bounce text-xl text-orange-400 dark:text-slate-600 hover:text-green-700 dark:hover:text-green-400">
                    <RiMailLine/>
            </button>
                <Modal isOpen={isOpenModal} closeModal={closeModal}>
                    <ContactForm/>
                </Modal>


                            
                            
                            
                                                                                        


                 
          
                
        

        </div>
    )
}
export default Contacto

                
                