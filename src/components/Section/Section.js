import PropTypes from 'prop-types';
import './Section.scss';

function Section({ children, title }) {
  return (
    <section className="section">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
