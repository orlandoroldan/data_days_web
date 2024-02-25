import { React, useState, useRef, useEffect } from "react";
import "./Modal.css"

const Modal = ({ hasCloseBtn, isOpen, onClose, children }) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef(null);

    useEffect(() => {
    setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
        if (isModalOpen) {
        modalElement.showModal();
        } else {
        modalElement.close();
        }
    }
    }, [isModalOpen]);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          handleCloseModal();
        }
    };

    return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="dialog-agenda">
        {children}
        {hasCloseBtn && (
        <button className="modal-close-btn" onClick={handleCloseModal}>
            Tanca
        </button>
        )}

    </dialog>
    );
};


Modal.Body = function ModalBody(props) {
    return (
        <div className="modal-body">
          {props.children}
        </div>
      );
};


Modal.Footer = function ModalFooter(props){
    return (
        <div className="modal-footer">
          {props.children}
        </div>
      );
}


Modal.Title = function ModalTitle(props) {
    return (
        <h3 className="modal-title">
            {props.children}
        </h3>
    )
};


export default Modal;
