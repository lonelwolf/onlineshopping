import "./modal.css"

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal  ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container bg-slate-100 shadow-lg shadow-violet-400" onClick={handleModalContainerClick}>
        <button className="absolute top-1 text-xs right-0 text-red-500 hover:bg-red-500 hover:text-slate-100 px-1" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
