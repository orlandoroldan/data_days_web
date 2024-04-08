import { useState } from "react";
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import "./Workshop.css";

const level_to_color = (where, level) => {
  if (where == "text"){
    if (level === "Beginner") return "#fae7cf";// return "#c7e5da"; // return "#c6e7d3";
    return "#f9d7cf";//"#dac7e5"; // return "#dac7e5";
  }
  if (where == "title"){
    if (level ==="Beginner") return "#d19156";
    return "#a55747";
  }
};

const Workshop = ({ item }) => {
  const { title, level, kind, small_description, description, date, time, place, author } = item;
  const [isOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="card profile workshop">
        <div className="card-body profile-title p-0">
          <div className="workshop-title p-3 rounded-top" style={{backgroundColor: level_to_color("title", `${level}`)}}>
            <h3>{title}</h3>
          </div>
          <div className="workshop-content p-3 rounded-bottom" style={{ backgroundColor: level_to_color("text",`${level}`) }}>
            <p className='description'>{small_description}</p>
            <div className='details'>
              <span className='level'>Nivell: {level}</span>
              <span className='date'>Data: {date}</span>
            </div>
            <a className={`btn btn-smooth-transition btn-${level}`} onClick={() => setModalOpen(true)}>Saber-ne més</a>
            <Modal
              hasCloseBtn={true}
              isOpen={isOpen}
              onClose={closeModal}>
              <Modal.Title>{title}</Modal.Title>
              <Modal.Body>
                <p>{description}</p>
                <br />
                <div className='modal-details'>
                  {author && <p>Ponent: {author}</p>}
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