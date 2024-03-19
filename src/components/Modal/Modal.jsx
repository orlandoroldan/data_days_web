import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from "react";
import "./Modal.css";


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
                <button className="modal-close-btn btn btn-orange btn-smooth-transition" onClick={handleCloseModal}>
                    Tanca
                </button>
            )}

        </dialog>
    );
};
Modal.propTypes = {
    hasCloseBtn: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
};

Modal.Body = function ModalBody({ children }) {
    return (
        <div className="modal-body">
            {children}
        </div>
    );
};
Modal.Body.propTypes = {
    children: PropTypes.node,
};


Modal.Footer = function ModalFooter({ children }) {
    return (
        <div className="modal-footer">
            {children}
        </div>
    );
};
Modal.Footer.propTypes = {
    children: PropTypes.node,
};


Modal.Title = function ModalTitle({ children }) {
    return (
        <h3 className="modal-title">
            {children}
        </h3>
    );
};
Modal.Title.propTypes = {
    children: PropTypes.node,
};

export default Modal;
