import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Book Name: {props.name}</p>
      <p>AuthorName: {props.authorName}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
};

export default Student;
