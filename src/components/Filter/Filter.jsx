import PropTypes from 'prop-types';
import "./Filter.css";

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const color_by_level = (level) => {
  if (level.level === "Beginner") {
    return "#dcd4b1";
  }
  else if (level.level === "Advanced") {
    return "#d3c3e9";
  }
  return "#c3e1e9";
};

const Filter = ({ level, isActive, onClick }) => {
  return (
    <div className="w-wrapper col-6 col-md-6">
      <div
        className="wrapper"
        onClick={onClick}
        style={{ backgroundColor: `${isActive ? "#386671" : color_by_level({ level })}` }}
      >
        <h3 className="title text-nowrap" style={{ color: `${isActive ? color_by_level({ level }) : "black"}` }}>{capitalize(level)}</h3>
      </div>
    </div>

  );
};
Filter.propTypes = {
  level: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Filter;