import PropTypes from 'prop-types';
import "./Filter.css";

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const color_by_level = (state,level) => {

  if (state === "unclicked"){
    if (level.level === "Beginner") {
      return "#fae7cf";
    }
    else if (level.level === "Advanced") {
      return "#f9d7cf";
    }
    return "#e5dac7";
  }
  if (state === "clicked"){
    if (level.level === "Beginner") {
        return "#d19156";
    }
    else if (level.level === "Advanced"){
        return "#a55747"
    }
    return "#7d6761";
  }
};

const Filter = ({ level, isActive, onClick }) => {
  return (
    <div className="w-wrapper col-6 col-md-6">
      <div
        className="wrapper"
        onClick={onClick}
        style={{ backgroundColor: `${isActive ? color_by_level("clicked", { level }) : color_by_level("unclicked",{ level })}` }}
      >
        <h3 className="title text-nowrap" style={{ color: `${isActive ? color_by_level("unclicked", { level }) : "black"}` }}>{capitalize(level)}</h3>
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