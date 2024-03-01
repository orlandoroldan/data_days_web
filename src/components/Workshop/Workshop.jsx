import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import "./Workshop.css"
import React, {useState} from "react"

const Workshop = ({ title, level, kind, description, date, time, place }) => {
    // modal
    const [isOpen, setModalOpen] = useState(false);
    
    const handleCloseModal = () => {
        setModalOpen(false);
    }

    return(
        <>
            <div class="card profile workshop">
                <div class="card-body profile-title p-0"> 
                    <div class="workshop-title p-3 rounded-top">
                        <h3>{title}</h3>
                    </div>
                    <div class="workshop-content p-3 rounded-bottom">
                        <p class="card-text">Nivell: {level}</p>
                        <p class="card-text">Data: {date}</p>
                        <a href="#" class="btn btn-smooth-transition btn-orange" onClick={() => setModalOpen(true)}>Saber-ne més</a>

                        {/* <dialog id="modal" class="modal">
                            <button id="closeModal" class="modal-close-btn">Close</button>
                            <p>hello</p>
                        </dialog> */}
                        <Modal
                            hasCloseBtn={true}
                            isOpen={isOpen}
                            onClose={handleCloseModal}>
                                <Modal.Title>{title}</Modal.Title>
                                <Modal.Body>
                                    {description}
                                    <p></p>
                                    <p>Temàtica: {kind}</p>
                                    <p>Data: {date}</p>
                                    <p>Hora: {time}</p>
                                    <p>Lloc: {place}</p>
                                    <p>Nivell: {level} <span className={`circle circle-${level}`}></span></p>
                                </Modal.Body>
                                <div className="modal">
                                    <div className='modal-header'>
                                        <h3 className="modal-title">{name}</h3>
                                    </div>
                                </div>
                        </Modal>
                    </div>

                </div>
            </div>
        </>
    )
};
Workshop.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired, 
  time: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
};


export default Workshop;