
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
            <div class="card profile workshop">
                <div class="card-body profile-title p-0"> 
                    <div class="workshop-title p-3 rounded-top">
                        <h3>{name}</h3>
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
                                <Modal.Title>{name}</Modal.Title>
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


const Agenda = () => {
    return <div id='agenda-section' className='app-section'>
        <div>
                <h1 className='titol-agenda'>Agenda</h1>
                <p>Aquí ve una mica d'explicació. Quins dies, quines temàtiques, quins nivells.</p>
        </div>
        <div>Barra per filtrar.</div>
        <div className='agenda'>
            
            <Workshop 
                name="Xerrada Cryptocurrency"
                level="Advanced"
                kind="Crypto"
                description="
                In the volatile realm of cryptocurrency, digital assets dance to the rhythm of blockchain technology, where every transaction is a node in a decentralized symphony. From the towering peaks of Bitcoin to the obscure altcoins lurking in the depths of the market, the landscape is a kaleidoscope of speculation and innovation.
                In the cryptoverse, bulls and bears engage in an eternal dance, as prices surge and plummet with the caprice of the wind. Investors ride the waves of volatility, seeking fortune amidst the chaos, while skeptics warn of bubbles waiting to burst."
                date="10/05"
                time="10h"
                place="A4202"
            />

            <Workshop 
                name="Xerrada Cryptocurrency 2"
                level="Advanced"
                kind="Crypto"
                description="
                In the volatile realm of cryptocurrency, digital assets dance to the rhythm of blockchain technology, where every transaction is a node in a decentralized symphony. From the towering peaks of Bitcoin to the obscure altcoins lurking in the depths of the market, the landscape is a kaleidoscope of speculation and innovation.
                In the cryptoverse, bulls and bears engage in an eternal dance, as prices surge and plummet with the caprice of the wind. Investors ride the waves of volatility, seeking fortune amidst the chaos, while skeptics warn of bubbles waiting to burst."
                date="10/05"
                time="10h"
                place="A4202"
            />


            <Workshop 
                name="Xerrada Cryptocurrency 3"
                level="Advanced"
                kind="Crypto"
                description="
                In the volatile realm of cryptocurrency, digital assets dance to the rhythm of blockchain technology, where every transaction is a node in a decentralized symphony. From the towering peaks of Bitcoin to the obscure altcoins lurking in the depths of the market, the landscape is a kaleidoscope of speculation and innovation.
                In the cryptoverse, bulls and bears engage in an eternal dance, as prices surge and plummet with the caprice of the wind. Investors ride the waves of volatility, seeking fortune amidst the chaos, while skeptics warn of bubbles waiting to burst."
                date="10/05"
                time="10h"
                place="A4202"
            />
        </div>
        
    </div>
  };
  
  export default Agenda;