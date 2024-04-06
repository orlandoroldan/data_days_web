import { useState } from "react";
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import "./Workshop.css";

const level_to_color = (level) => {
  if (level === "Beginner") return "#dcd4b1";
  return "#d3c3e9";
};

const Workshop = ({ item }) => {
  const { title, level, kind, small_description, description, date, time, place, autor } = item;
  const [isOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="card profile workshop">
        <div className="card-body profile-title p-0">
          <div className="workshop-title p-3 rounded-top">
            <h3>{title}</h3>
          </div>
          <div className="workshop-content p-3 rounded-bottom" style={{ backgroundColor: level_to_color(`${level}`) }}>
            <p className='description'>{small_description}</p>
            <div className='details'>
              <span className='level'>Nivell: {level}</span>
              <span className='date'>Data: {date}</span>
            </div>
            <a className="btn btn-smooth-transition btn-orange" onClick={() => setModalOpen(true)}>Saber-ne més</a>
            <Modal
              hasCloseBtn={true}
              isOpen={isOpen}
              onClose={closeModal}>
              <Modal.Title>{title}</Modal.Title>
              <Modal.Body>
                <p>{description}</p>
                <br />
                <div className='modal-details'>
                  {autor && <p>Autor: {autor}</p>}
                  <p>Data: {date}</p>
                  <p>Hora: {time}</p>
                  <p>Lloc: {place}</p>
                  <p>Nivell: {level} </p>
                  <p>Temàtica: {kind}</p>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
Workshop.propTypes = {
  item: PropTypes.object.isRequired,
};


export default Workshop;