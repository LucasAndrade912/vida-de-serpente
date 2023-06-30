import "../css/title.css";
import PropTypes from "prop-types";

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function Title(props) {
  return (
    <div className="title">
      <h1>{props.text}</h1>
    </div>
  );
}
