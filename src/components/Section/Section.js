import PropTypes from 'prop-types';
import './Section.scss';

function Section({ children, title }) {
  return (
    <div className="section">
      {title && <h1 className="title">{title}</h1>}
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
