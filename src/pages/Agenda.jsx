
import PropTypes from 'prop-types';
import Modal from '../components/Modal';
import React, {useState} from "react"
// name: name of the workshop
// level: Beginner, Intermediate, Advanced
// kind: cyber-security, databases, etc.
// description: long description (for the pop-up)
// date: date of the workshop
// time: format hh.mm
// place: where the workshop takes place


const Workshop = ({ name, level, kind, description, date, time, place }) => {
    const [isOpen, setModalOpen] = useState(false);
    
    const handleCloseModal = () => {
        setModalOpen(false);
    }

    return(
        <>
            <div class="card profile" style={{width: "33%"}}>
                <div class="card-body profile-title p-0" > 
                    <div class="p-2" style={{height: "20%", backgroundColor: "black"}}>
                        <h3 class="card-title" style={{color: "white"}}>{name}</h3>
                    </div>
                    <div class="p-2" style={{backgroundColor: "yellow"}}>
                        <p class="card-text">Nivell: {level}</p>
                        <p class="card-text">Data: {date}</p>
                        <a href="#" class="btn btn-primary" onClick={() => setModalOpen(true)}>Saber-ne més</a>

                        {/* <dialog id="modal" class="modal">
                            <button id="closeModal" class="modal-close-btn">Close</button>
                            <p>hello</p>
                        </dialog> */}
                        <Modal
                            hasCloseBtn={true}
                            isOpen={isOpen}
                            onClose={handleCloseModal}>
                                <h1>Holi</h1>
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


const Agenda = () => {
    return <div id='agenda-section' className='app-section'>
        <div>Text previ.</div>
        <div>Barra per filtrar.</div>
        <div className='agenda'>
            
            <Workshop 
            name="Xerrada Cryptocurrency"
            level="Beginner"
            kind="Crypto"
            description="..."
            date="10/05"
            time="10h"
            place="A4202"
            />

        </div>
        
    </div>
  };
  
  export default Agenda;